// Types
import { FunctionComponent } from "react";

// Components
import { NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";

// Core
import routes from "../../core/navigation/routes";

// Icons
import logo from "../../core/assets/images/logo.png";

const Sidebar: FunctionComponent = () => {
  return (
    <div className="w-full bg-secondary h-full pt-[67px] pb-[53px] flex flex-col justify-between">
      <div className="px-[23px] lg:px-[53px]">
        <img src={logo} alt="Logo" className="pb-[50px]" />

        {/* Navigation */}
        <div className="flex flex-col">
          {routes.map((route) => (
            <NavLink
              className={({ isActive }) =>
                `pl-1 mb-[31px] h-[35px] uppercase font-bold text-lg ${
                  isActive ? "text-primary" : "text-white"
                }`
              }
              key={route.path}
              to={route.path}
              {...route}
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* User profile section */}
      <div className="px-5 lg:px-10">
        <UserProfile />
      </div>
    </div>
  );
};

export default Sidebar;
