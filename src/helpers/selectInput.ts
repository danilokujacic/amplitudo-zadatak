import { SelectOption } from "../shared/types";

const isOptionString = (option: SelectOption): option is string => {
  return typeof option === "string";
};

const getOptionKey = (option: SelectOption) => {
  if (isOptionString(option)) {
    return option;
  }

  return option.key;
};
const getOptionLabel = (option: SelectOption) => {
  if (isOptionString(option)) {
    return option;
  }

  return option.label;
};
const formatOptions = (options: SelectOption[]) => {
  return options.map((option) => ({
    value: getOptionKey(option),
    label: getOptionLabel(option),
  }));
};

export default formatOptions;
