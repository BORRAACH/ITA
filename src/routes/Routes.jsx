import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home/Home.jsx";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
