import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Placeholder />} />
      <Route path="/shop" element={<Placeholder />} />
      <Route path="/about" element={<Placeholder />} />
      <Route path="/contact" element={<Placeholder />} />
    </Routes>
  </BrowserRouter>
);
