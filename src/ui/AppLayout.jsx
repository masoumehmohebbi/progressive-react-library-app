import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import Cookies from 'universal-cookie';
import { useToken } from '../features/authentication/TokenContext';
import { useEffect } from 'react';
const cookies = new Cookies();

const AppLayout = () => {
  const { token, setToken } = useToken();
  // setToken(cookies.get('access_token'));

  useEffect(() => {
    setToken(cookies.get('access_token'));
  }, [setToken, token]);

  return (
    <div>
      <NavBar />
      <div className="md:max-w-screen-lg mx-auto">
        <Banner />
        {token && <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
