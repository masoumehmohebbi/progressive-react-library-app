import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
