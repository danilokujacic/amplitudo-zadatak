import React from "react";
import useUser from "../../hooks/useUser";
import profile from "../../core/assets/icons/profile.svg";

const UserProfile = () => {
  const { me, hasError } = useUser();

  if (hasError) {
    return <p>User not found</p>;
  }
  if (!me) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex items-center w-full">
      <img src={profile} alt="Profile icon" className="mr-3" />
      <div className="overflow-hidden w-full">
        <p className="text-white font-bold text-base mb-0 w-full overflow-hidden text-ellipsis">
          {me?.name}
        </p>
        <p
          title={me?.email}
          className="text-white text-sm mb-0 w-full overflow-hidden text-ellipsis"
        >
          {me?.email}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
