import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import { getTokens } from '../services/authService';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

const AppLayout = () => {
  const { isSuccess } = useMutation({
    mutationFn: getTokens,
  });

  useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]);

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
