// Library modules
import {
  FunctionComponent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import { Controller, useFormContext } from "react-hook-form";

// Components
import FormField from "../FormField";
import UploadField from "../UploadField";

// Types
import IDefaultInputProps from "./inputPropsType";

const FormUploadInput: FunctionComponent<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    IDefaultInputProps
> = ({ label, required = false, ...props }) => {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { ref, ...restField }, fieldState, formState }) => (
        <FormField
          label={label}
          required={required}
          fieldState={fieldState}
          isFormSubmited={formState.isSubmitted}
        >
          <UploadField
            onRemoveFile={() => setValue(props.name, null)}
            {...props}
            {...restField}
          />
        </FormField>
      )}
    />
  );
};

export default FormUploadInput;
