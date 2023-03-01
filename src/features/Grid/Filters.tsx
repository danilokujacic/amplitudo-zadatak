//Library modules
import { FunctionComponent, useEffect } from "react";

//Components
import { useForm, FormProvider } from "react-hook-form";
import FormSelectInput from "../../components/FormInputs/SelectInput";
import { getSelectCourses } from "../../core/api/selectData";
import FormSearchInput from "../../components/FormInputs/SearchInput";
import { FilterValues } from "./types";

interface IGridFiltersProps {
  handleFiltersChange: (data: FilterValues) => void;
}

const GridFilters: FunctionComponent<IGridFiltersProps> = ({
  handleFiltersChange,
}) => {
  const methods = useForm({
    defaultValues: {
      searchValue: null,
      selectedYear: null,
      selectedCategory: null,
    },
  });

  const selectedYear = methods.watch("selectedYear");
  const selectedCategory = methods.watch("selectedCategory");
  const searchValue = methods.watch("searchValue");

  useEffect(() => {
    handleFiltersChange({
      selectedYear,
      selectedCategory,
      searchValue,
    });
  }, [selectedYear, selectedCategory, searchValue, handleFiltersChange]);

  return (
    <form className="flex justify-start  w-4/6 md:w-1/2 xl:space-x-[14px] flex-col xl:flex-row">
      <FormProvider {...methods}>
        <div className="flex w-full items-center justify-between xl:justify-start xl:order-1  order-2 ">
          <div className="w-[48%] md:w-1/2 md:mr-[14px] xl:w-[178px]">
            <FormSelectInput
              options={["2023", "2022", "2021"]}
              name="selectedYear"
              className="text-ltgray border-[1px] border-border rounded-[20px]"
              bordered={false}
              placeholder="Izaberi godinu"
              enableReset
              resetOption="Izaberi godinu"
            />
          </div>
          <div className="w-[48%] md:w-1/2 xl:max-w-[233px] xl:w-[40%] xl:min-w-[180px] ">
            <FormSelectInput
              options={{
                queryKey: "select-courses",
                queryFn: getSelectCourses,
              }}
              name="selectedCategory"
              className="text-ltgray border-[1px] border-border rounded-[20px]"
              bordered={false}
              placeholder="Izaberi kategoriju"
              enableReset
              resetOption="Izaberi kategoriju"
            />
          </div>
        </div>
        <div className="w-full flex-shrink-0 xl:max-w-[233px] min-w-[180px] xl:w-[40%]   order-1 xl:order-2 mb-2 xl:mb-0">
          <FormSearchInput name="searchValue" placeholder="Pretraga.." />
        </div>
      </FormProvider>
    </form>
  );
};

export default GridFilters;
