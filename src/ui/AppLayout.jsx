import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="md:max-w-screen-lg mx-auto">
        <Banner />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
