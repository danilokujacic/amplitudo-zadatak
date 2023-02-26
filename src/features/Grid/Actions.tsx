import IconButton from "../../components/IconButton";
// Components
import AddNewCourseButton from "./AddNewCourseButton";

// Icons
import exportIcon from "../../core/assets/icons/export.svg";

const GridActions = () => {
  return (
    <div className="flex items-center">
      <IconButton
        className="mr-[31px]"
        icon={<img src={exportIcon} width="24" height="24" alt="plus" />}
      />
      <AddNewCourseButton />
    </div>
  );
};

export default GridActions;
