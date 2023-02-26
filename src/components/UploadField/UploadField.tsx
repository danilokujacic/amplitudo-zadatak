import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
  FunctionComponent,
} from "react";
import File from "./File";

interface IUploadFieldProps {
  value?: string | null;
  onRemoveFile: () => void;
}

type DefaultInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const UploadField: FunctionComponent<
  Omit<DefaultInputProps, "value"> & IUploadFieldProps
> = ({ value, onRemoveFile, ...props }) => {
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  const openInput = () => {
    if (inputRef) {
      inputRef.click();
    }
  };

  return (
    <div
      className={`w-full h-[55px] p-3 box-border flex items-center border-border border-solid border cursor-pointer ${
        value ? "bg-tableHover" : "justify-center"
      }`}
      onClick={openInput}
    >
      {value ? (
        <File onRemoveFile={onRemoveFile} file={value} />
      ) : (
        <p className="mb-0 font-normal text-sm text-ltgray">Uploadujte fajl</p>
      )}
      <input
        ref={setInputRef}
        className="hidden"
        type="file"
        {...props}
        onChange={(event) =>
          props.onChange && props.onChange((event.target as any).files[0].name)
        }
      />
    </div>
  );
};

export default UploadField;
