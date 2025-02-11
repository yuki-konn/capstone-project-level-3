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
let rootpath = "";
if (domain === "yuki-kon.github.io") rootpath = "/capstone-project-level-3";

root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`${rootpath}/`} element={<Home />} />
        <Route path={`${rootpath}/shop`} element={<Shop />} />
        <Route path={`${rootpath}/about`} element={<About />} />
        <Route path={`${rootpath}/contact`} element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
