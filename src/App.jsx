import BooksList from './pages/BooksList';
import AppLayout from './ui/AppLayout';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import LogIn from './pages/LogIn';
import ScrollToTop from './ui/ScrollToTop';
import { AboutUs } from './pages/AboutUs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<BooksList />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about-us/contact" element={<AboutUs />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
