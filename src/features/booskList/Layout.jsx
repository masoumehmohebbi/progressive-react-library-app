import { Outlet } from 'react-router-dom';
import NavBar from '../../ui/NavBar';
import Footer from '../../ui/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
