import Print from "@/pages/print";
import Home from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
