// Library modules
import { Controller, useFormContext } from "react-hook-form";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

// Components
import FormField from "../FormField";

// Types
import { FunctionComponent } from "react";
import IDefaultInputProps from "./inputPropsType";

import SearchField from "../SearchField";
import debounceValue from "../../utils/debounceValue";

interface IInputProps extends IDefaultInputProps {
  debouncerTime?: number;
}

const FormSearchInput: FunctionComponent<
  IInputProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ label, required = false, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { ref, ...field }, fieldState, formState }) => (
        <FormField
          label={label}
          required={required}
          fieldState={fieldState}
          isFormSubmited={formState.isSubmitted}
        >
          {props.debouncerTime ? (
            <SearchField
              {...props}
              {...field}
              onChange={(event) =>
                debounceValue(() => field.onChange(event), props.debouncerTime)
              }
            />
          ) : (
            <SearchField {...props} {...field} />
          )}
        </FormField>
      )}
    />
  );
};

export default FormSearchInput;
