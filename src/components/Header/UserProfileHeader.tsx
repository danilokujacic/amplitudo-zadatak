// Library modules
import { useState } from "react";

// Components
import ClickAwayListener from "react-click-away-listener";

// Icons
import profile from "../../core/assets/icons/profile.svg";

const UserProfileHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => !show && setShow(true)}>
        <img src={profile} alt="profile" />
      </button>
      {show && (
        <ClickAwayListener onClickAway={() => setShow(false)}>
          <div className="bg-white w-[200px] box-border px-4 py-4 rounded-sm shadow-md  absolute -bottom-[70px] -left-[100px]">
            popper
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default UserProfileHeader;
