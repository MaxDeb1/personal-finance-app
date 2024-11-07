import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const Layout = () => {
  return (
    <div className=" flex overflow-hidden h-screen w-[100vw]">
      <Sidebar />
      <div className="w-full h-full overflow-hidden">
        <div className="px-8 pt-8 pb-[150px] w-full h-[91%] overflow-auto bg-secondary_bg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
