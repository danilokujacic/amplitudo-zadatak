// Types
import {
  FunctionComponent,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";

interface IIconButtonProps {
  icon: JSX.Element;
}
const IconButton: FunctionComponent<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    IIconButtonProps
> = ({ icon, ...props }) => {
  return (
    <button
      className="w-6 h-6 border-none rounded-full focus:outline-none text-primary flex items-center justify-center"
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
