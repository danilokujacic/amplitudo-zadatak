import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mark from "../core/assets/icons/mark.svg";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { isEdit } = state;

  const courseMessage = isEdit
    ? "Obuka je uspiješno izmijenjena."
    : "Nova obuka je uspiješno dodata.";

  useEffect(() => {
    setTimeout(() => {
      navigate("/courses");
    }, 3000);
  }, [navigate]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[272px]">
        <div className="h-[272px] mb-[103px] w-full rounded-full border-[4px] border-solid border-primary flex items-center justify-center">
          <img src={mark} alt="Mark" />
        </div>
        <h1 className="uppercase text-center font-bold text-2xl text-secondary">
          Uspjesno
        </h1>
        <p className="text-secondary text-center block mb-0 text-sm">
          {courseMessage}
        </p>
      </div>
    </div>
  );
};

export default Success;
