// Types
import {
  FunctionComponent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

// Icons
import search from "../../../core/assets/icons//search.svg";

const SearchInput: FunctionComponent<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  return (
    <div className="border flex placeholder:text-ltgray h-[33.6px] items-center box-border border-border text-xs w-full rounded-[20px] pl-[13px] pr-[14px] text-ltgray">
      <img src={search} alt="search" className="pr-2" />
      <input
        className="border-none text-ltgray focus:outline-none ml-2 w-full"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
