// Components
import IconButton from "../../components/IconButton";

// Icons
import edit from "../../core/assets/icons/edit.svg";
import { useNavigate } from "react-router-dom";

const RowActions = (props: any) => {
  const navigate = useNavigate();
  const navigateToEditCoursePage = () => {
    navigate("/course/" + props.data.id);
  };
  return (
    <div
      id="actions-div"
      className="w-full h-full hidden items-center justify-end  xl:pr-[65px]"
    >
      <IconButton
        className="flex-shrink-0"
        onClick={navigateToEditCoursePage}
        icon={<img src={edit} alt="Edit" />}
      />
    </div>
  );
};
export default RowActions;
