// Library modules
import { FunctionComponent, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

// Components
import { Select, SelectProps } from "antd";
import FormField from "../FormField";

// Helpers
import formatOptions from "../../helpers/selectInput";

// Hooks
import useSelectOptions from "../../hooks/useSelectOptions";

// Types
import { AsyncSelectOption, SelectOption } from "../../shared/types";
import IDefaultInputProps from "./inputPropsType";

interface IFormSelectInputProps extends IDefaultInputProps {
  options: SelectOption[] | AsyncSelectOption;
  enableReset?: boolean;
  resetOption?: string;
}

const FormSelectInput: FunctionComponent<
  Omit<SelectProps, "options"> & IFormSelectInputProps
> = ({ options, label, required = false, ...props }) => {
  const opts = useSelectOptions(options, {
    enableReset: !!props.enableReset,
    resetOption: props.resetOption || "Ponisti",
  });
  const selectOotions = useMemo(
    () => formatOptions(opts.options || []),
    [opts]
  );
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState, formState }) => (
        <FormField
          label={label}
          required={required}
          fieldState={fieldState}
          isFormSubmited={formState.isSubmitted}
        >
          <Select
            options={selectOotions}
            {...props}
            {...field}
            loading={opts.isLoading}
          />
        </FormField>
      )}
    />
  );
};

export default FormSelectInput;
