// Library modules
import { Controller, useFormContext } from "react-hook-form";

// Components
import FormField from "../FormField";
import { DatePicker, DatePickerProps } from "antd";

// Types
import { FunctionComponent } from "react";
import IDefaultInputProps from "./inputPropsType";

import dayjs from "dayjs";

const FormDatePicker: FunctionComponent<
  DatePickerProps & IDefaultInputProps
> = ({ label, required = false, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { value, ...field }, fieldState, formState }) => (
        <FormField
          label={label}
          required={required}
          fieldState={fieldState}
          isFormSubmited={formState.isSubmitted}
        >
          <DatePicker
            {...props}
            {...field}
            value={value ? dayjs(value) : null}
          />
        </FormField>
      )}
    />
  );
};

export default FormDatePicker;
