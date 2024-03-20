import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import Cookies from 'universal-cookie';
import { useToken } from '../features/authentication/TokenContext';
import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
const cookies = new Cookies();

const AppLayout = () => {
  const { token, setToken } = useToken();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current && !cookies.get('access_token')) {
      firstRender.current = false;
      toast.success('لطفا شکیبا باشید. سرور در حال روشن شدن است', {
        icon: '⏳',
        duration: 5000,
      });
      return;
    }
  }, []);

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
