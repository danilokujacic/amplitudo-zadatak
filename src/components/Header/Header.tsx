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
      <div className="bg-secondary flex justify-between px-4 py-6 w-full">
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
            <Hamburger onToggle={toggleNavigation} />
          </div>
        </div>
      </div>
      {showNavigation && <MobileNavigation />}
    </>
  );
};

export default Header;
