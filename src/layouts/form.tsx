import { FunctionComponent, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../components/IconButton";
import back from "../core/assets/icons/back.svg";

const FormPageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col pt-[41px] xl:pt-[71px]  pb-[71px] w-full h-full">
      <div className="text-primary text-2xl font-bold pl-[41px] pr-[41px] xl:pl-[87px] xl:pr-[77px]">
        <IconButton onClick={goBack} icon={<img src={back} alt="back" />} />
      </div>
      <div className="h-full w-full overflow-auto pl-[41px] pr-[41px] xl:pl-[87px] xl:pr-[77px]">
        {children}
      </div>
    </div>
  );
};

export default FormPageLayout;
