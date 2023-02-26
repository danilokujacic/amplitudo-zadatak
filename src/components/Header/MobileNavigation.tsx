// Components
import { NavLink } from "react-router-dom";

// Core
import routes from "../../core/navigation/routes";

const MobileNavigation = () => {
  return (
    <div className="absolute w-full  bottom-0 h-full bg-secondary flex">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        {routes.map((route) => (
          <NavLink
            className={({ isActive }) =>
              `pl-1 mb-4  font-bold text-xl ${
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
  );
};

export default MobileNavigation;
