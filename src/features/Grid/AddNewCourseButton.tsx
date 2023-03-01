// Icons
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import plus from "../../core/assets/icons/plus.svg";
import Screens from "../../shared/mediaScreen";

const AddNewCourseButton = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const navigate = useNavigate();
  const navigateToNewCoursePage = () => {
    navigate("/course");
  };

  useEffect(() => {
    if (window.screen.width < Screens.Tablet) {
      setIsMobileView(true);
    }
  }, []);
  return (
    <button
      onClick={navigateToNewCoursePage}
      className="flex fixed bottom-4 right-4 md:bottom-0 md:right-0 md:relative text-white w-[43px] md:w-auto md:min-w-[160px] uppercase text-sm font-bold h-[43px] items-center px-[10px] bg-primary border-[1.5px] border-solid border-primary shadow-[4px_4px_4px_rgba(0,0,0,0.03)] rounded-[30px]"
    >
      <img className="mr-1" src={plus} alt="Plus" />
      {!isMobileView && <span>Nova obuka</span>}
    </button>
  );
};

export default AddNewCourseButton;
