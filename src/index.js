import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Shop } from "./Views/Shop";
import { About } from "./Views/About";
import { Contact } from "./Views/Contact";
import "./index.scss";
import { Header } from "./Views/Header";
import { Footer } from "./Views/Footer";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

const domain = window.location.hostname;
console.log(`Domain: ${domain}`);

root.render(
  <>
    <BrowserRouter>
      <Header />
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
      <Footer />
    </BrowserRouter>
  </>
);
