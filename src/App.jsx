import AppLayout from './ui/AppLayout';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import LogIn from './pages/LogIn';
import ScrollToTop from './ui/ScrollToTop';
import { AboutUs } from './pages/AboutUs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './pages/Home';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <GoogleOAuthProvider clientId="617736620861-s7c28j7e0n268l00khh9p1ltc8kckouh.apps.googleusercontent.com">
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/about-us/contact" element={<AboutUs />} />
          </Routes>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
