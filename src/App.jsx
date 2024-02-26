import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="container mx-auto font-sans">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
