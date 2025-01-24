import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Shop } from "./Views/Shop";
import { About } from "./Views/About";
import { Contact } from "./Views/Contact";

const root = createRoot(window.bodyTag);
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/capstone-project-level-3" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/capstone-project-level-3/shop" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/capstone-project-level-3/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/capstone-project-level-3/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>
);
