import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Shop } from "./Views/Shop";

const root = createRoot(window.bodyTag);
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </BrowserRouter>
  </>
);
