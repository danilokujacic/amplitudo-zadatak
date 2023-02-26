import { FunctionComponent, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <div className="hidden md:block md:w-[230px]  lg:w-[320px] h-full flex-shrink-0">
        <Sidebar />
      </div>
      <div className="block md:hidden">
        <Header />
      </div>
      <div className="flex-1 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
