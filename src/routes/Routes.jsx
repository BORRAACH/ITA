import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home/Home.jsx";
import Email from "src/pages/Email/Email";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/email" element={Email} />
    </Routes>
  );
}
