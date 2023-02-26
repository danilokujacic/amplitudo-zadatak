import { FunctionComponent } from "react";
import fileIcon from "../../core/assets/icons/file.svg";
import x from "../../core/assets/icons/x.svg";
import IconButton from "../IconButton";

interface IFileProps {
  file: string;
  onRemoveFile: () => void;
}

const File: FunctionComponent<IFileProps> = ({ file, onRemoveFile }) => {
  const removeFile = (event: any) => {
    event.stopPropagation();
    onRemoveFile();
  };
  return (
    <div className="flex justify-between w-full items-center h-full">
      <div className="flex items-center h-full">
        <img src={fileIcon} alt="File" />
        <p className="ml-2 mb-0 text-primary font-normal text-sm">{file}</p>
      </div>
      <IconButton onClick={removeFile} icon={<img src={x} alt="Remove" />} />
    </div>
  );
};

export default File;
