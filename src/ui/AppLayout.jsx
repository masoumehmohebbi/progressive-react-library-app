import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import { useQuery } from '@tanstack/react-query';
import useUser from '../features/authentication/useUser';
import { getUser, verifyToken } from '../services/authService';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'universal-cookie';

const AppLayout = () => {
  const { data } = useUser();
  const userProfile = data?.data?.data;

  return (
    <div>
      <NavBar />
      <div className="md:max-w-screen-lg mx-auto">
        <Banner />
        {userProfile && <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
