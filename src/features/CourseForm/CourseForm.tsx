// Library modules
import { FunctionComponent, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "react-query";

// Components
import FormDatePicker from "../../components/FormInputs/DateInput";
import FormSelectInput from "../../components/FormInputs/SelectInput";
import FormUploadInput from "../../components/FormInputs/UploadInput";
import { Button } from "antd";

// Api
import { getSelectCourses } from "../../core/api/selectData";
import { getMentors } from "../../core/api/users";
import { addCourse, editCourse } from "../../core/api/courseMutations";

// Types
import { CourseData } from "../../shared/types";

// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ICourseFormProps {
  data?: CourseData;
  id?: string;
}

const schema = yup.object({
  name: yup.string().typeError("Polje je obavezno").min(3).max(20).required(),
  mentor: yup.string().typeError("Polje je obavezno").min(3).max(20).required(),
  startDate: yup
    .date()
    .typeError("Polje je obavezno")
    .min(new Date(), "Ne moze biti prije trenutnog datuma")
    .required(),
  endDate: yup
    .date()
    .typeError("Polje je obavezno")
    .min(new Date(), "Ne moze biti prije trenutnog datuma")
    .test(
      "same_dates_test",
      "Datum zavrsetka mora biti posle datuma pocetka.",
      function (value) {
        if (!value) return true;
        const { startDate } = this.parent;
        return value.getTime() > startDate.getTime();
      }
    ),
  schedule: yup.array().typeError("Polje je obavezno").required(),
  workingPlan: yup.string().nullable(),
});

const CourseForm: FunctionComponent<ICourseFormProps> = ({ data, id }) => {
  const navigate = useNavigate();
  const { isLoading, isSuccess, mutate } = useMutation(
    //@ts-ignore
    async (cData: CourseData & { id: string }): Promise<any> =>
      await (!cData.id ? addCourse(cData) : editCourse(cData))
  );

  const methods = useForm({
    defaultValues: data,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: any) => {
    mutate({ id, ...formData });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/success", { state: { isEdit: !!id } });
    }
  }, [isSuccess, navigate, id]);
  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col w-full space-y-[36px]"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormSelectInput
          label="Obuka"
          name="name"
          size="large"
          required
          placeholder="Izaberi obuku"
          className="text-black placeholder:text-black"
          options={{
            queryKey: "select-courses",
            queryFn: getSelectCourses,
          }}
        />
        <FormSelectInput
          label="Mentor"
          required
          name="mentor"
          size="large"
          showSearch
          placeholder="Izaberi mentora"
          className="text-black placeholder:text-black"
          options={{
            queryKey: "select-mentors",
            queryFn: getMentors,
          }}
        />

        <FormDatePicker
          label="Pocetak"
          required
          picker="date"
          size="large"
          name="startDate"
          disabledDate={(current) => current < moment()}
          placeholder="Izaberi datum pocetka"
        />
        <FormDatePicker
          label="Zavrsetak"
          required
          size="large"
          disabledDate={(current) => current < moment()}
          picker="date"
          name="endDate"
          placeholder="Izaberi datum zavrsetka"
        />
        <FormSelectInput
          label="Raspored"
          name="schedule"
          size="large"
          mode="multiple"
          placeholder="Izaberi dane"
          required
          options={["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak"]}
        />
        <FormUploadInput name="workingPlan" label="Plan rada" />

        <Button
          disabled={
            data
              ? !Object.keys(methods.formState).length
              : !methods.formState.isValid
          }
          htmlType="submit"
          loading={isLoading}
          className="bg-primary rounded-[30px] hover:text-white flex items-center justify-center h-[57px] text-white font-bold text-[16px] uppercase"
        >
          {data ? "Izmijeni obuku" : "Dodaj obuku"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CourseForm;
