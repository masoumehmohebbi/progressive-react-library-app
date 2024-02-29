import BooksList from "./pages/BooksList";
import AppLayout from "./ui/AppLayout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<BooksList />} />
      </Route>
    </Routes>
  );
};

export default App;
