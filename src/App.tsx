import AppLayout from './ui/AppLayout';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import LogIn from './pages/LogIn';
import ScrollToTop from './ui/ScrollToTop';
import { AboutUs } from './pages/AboutUs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import BookDetails from './features/booskList/BookDetails';
import Layout from './features/booskList/Layout';
import NotFound from './pages/NotFound';
import Provider from './ui/Provider';
import { clarity } from 'react-microsoft-clarity';
import { useEffect } from 'react';

const App = () => {
  const queryClient = new QueryClient();
  clarity.init('rwpygc4klf');

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clarityTag = target.getAttribute('data-clarity');
      if (clarityTag) {
        // clarity('set', clarityTag, true);
        (window as any).clarity('set', 'test_click', true);
        console.log('Clarity tag sent:', clarityTag);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return (
    <>
      <Provider>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <ScrollToTop />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<LogIn />} />
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<Layout />}>
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/about-us/contact" element={<AboutUs />} />
          </Routes>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default App;
