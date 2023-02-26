// Icons
import { useNavigate } from "react-router-dom";
import plus from "../../core/assets/icons/plus.svg";

const AddNewCourseButton = () => {
  const navigate = useNavigate();
  const navigateToNewCoursePage = () => {
    navigate("/course");
  };
  return (
    <button
      onClick={navigateToNewCoursePage}
      className="flex text-white min-w-[160px] uppercase text-sm font-bold h-[43px] items-center px-[10px] bg-primary border-[1.5px] border-solid border-primary shadow-[4px_4px_4px_rgba(0,0,0,0.03)] rounded-[30px]"
    >
      <img className="mr-1" src={plus} alt="Plus" />
      <span>Nova obuka</span>
    </button>
  );
};

export default AddNewCourseButton;
