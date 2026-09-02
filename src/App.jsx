import React from "react";
import { Routes, Route } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
