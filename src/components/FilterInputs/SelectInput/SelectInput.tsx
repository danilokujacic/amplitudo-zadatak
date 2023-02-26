// Library modules
import { useMemo, FunctionComponent } from "react";

// Components
import { Select } from "antd";

// Types
import { SelectProps } from "antd/lib/select";
import { SelectOption } from "../../../shared/types";

// Helpers
import formatOptions from "../../../helpers/selectInput";

interface ISelectInputProps {
  options: SelectOption[];
}

const SelectInput: FunctionComponent<
  Omit<SelectProps, "options"> & ISelectInputProps
> = ({ options, ...props }) => {
  const formatedOptions = useMemo(() => formatOptions(options), [options]);
  return (
    <Select
      options={formatedOptions}
      className="w-full rounded-[20px]"
      {...props}
    />
  );
};

export default SelectInput;
