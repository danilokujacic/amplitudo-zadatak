// Types
import { FunctionComponent, PropsWithChildren } from "react";

// Components
import { ControllerFieldState } from "react-hook-form";

interface IFormFieldProps {
  label?: string;
  required?: boolean;
  fieldState: ControllerFieldState;
  isFormSubmited?: boolean;
}
const FormField: FunctionComponent<PropsWithChildren<IFormFieldProps>> = ({
  children,
  label,
  required,
  isFormSubmited,
  fieldState,
}) => {
  const { invalid, isDirty, error } = fieldState;
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-ltgray font-normal text-[13px] mb-1">
          {label}&nbsp;
          {required ? <span className="text-red-500">*</span> : <></>}
        </label>
      )}
      {children}
      {(isDirty || isFormSubmited) && invalid ? (
        <p className="mb-0 mt-1 text-red-500 text-xs font-normal">
          {error?.message}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormField;
