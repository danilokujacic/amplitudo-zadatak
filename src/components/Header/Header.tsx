// Library modules
import { useState } from "react";

// Icons
import logo from "../../core/assets/images/logo.png";

// Components
import { Spin as Hamburger } from "hamburger-react";
import UserProfileHeader from "./UserProfileHeader";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation((prev) => !prev);
  };

  return (
    <>
      <div className="bg-secondary flex justify-between px-4 py-6 w-full fixed z-[60]">
        <img
          src={logo}
          className="flex-shrink-0"
          width={160}
          height={60}
          alt="Logo"
        />
        <div className="flex ">
          <UserProfileHeader />
          <div className="text-white ml-2">
            <Hamburger toggled={showNavigation} onToggle={toggleNavigation} />
          </div>
        </div>
      </div>
      {showNavigation && (
        <MobileNavigation toggleNavigation={toggleNavigation} />
      )}
    </>
  );
};

export default Header;
