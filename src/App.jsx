import BooksList from "./pages/BooksList";
import AppLayout from "./ui/AppLayout";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<BooksList />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};

export default App;
