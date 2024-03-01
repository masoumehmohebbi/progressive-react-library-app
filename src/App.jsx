import BooksList from "./pages/BooksList";
import AppLayout from "./ui/AppLayout";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<BooksList />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
