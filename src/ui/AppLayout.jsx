import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Stats from "./Stats";
import Banner from "./Banner";
const AppLayout = () => {
  return (
    <div className="font-sans bg-slate-100 ">
      <NavBar />
      <div className="container mx-auto">
        <Banner />
        <Stats />
        <Outlet />
      </div>
      <div className="h-screen">kk</div>
    </div>
  );
};

export default AppLayout;
