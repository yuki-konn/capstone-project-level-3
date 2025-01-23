import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";

const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/shop" />
      <Route path="/about" />
      <Route path="/contact" />
    </Routes>
  </BrowserRouter>
);
