// Library modules
import { Divider } from "antd";
import { useState } from "react";

// Components
import ClickAwayListener from "react-click-away-listener";

// Icons
import profile from "../../core/assets/icons/profile.svg";
import useUser from "../../hooks/useUser";

const UserProfileHeader = () => {
  const { me, hasError } = useUser();
  const [show, setShow] = useState(false);

  if (hasError) {
    return <p>User not found</p>;
  }
  if (!me) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative">
      <button onClick={() => !show && setShow(true)}>
        <img src={profile} alt="profile" />
      </button>
      {show && (
        <ClickAwayListener onClickAway={() => setShow(false)}>
          <div className="flex flex-col bg-white w-[250px] box-border px-4 py-4 rounded-sm shadow-md  absolute -bottom-[100px] -right-[5px]">
            <p className="mb-0 font-bold">{me.name}</p>
            <Divider className="my-4" />
            <p className="mb-0 text-sm">{me.email}</p>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default UserProfileHeader;
