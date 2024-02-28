import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Stats from "./Stats";
import Banner from "./Banner";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="md:max-w-screen-lg mx-auto">
        <Banner />
        <Stats />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
