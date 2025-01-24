import React from "react";
import { Navbar } from "./Navbar";

export function Home() {
  debugger;
  return (
    <>
      <header>
        <Navbar page="home"></Navbar>
        <img
          id="banner-img"
          className="border-bottom border-top border-black border-5"
          width="100%"
          src="../assets/images/banner1.png"
          alt="Yuki's Tea Shop Banner Image"
          useMap="#banner-image-map"
        />
        <map name="banner-image-map">
          <area
            title="Yuki's GitHub"
            shape="circle"
            coords="1920,640, 75"
            href="https://github.com/yuki-konn"
            alt="GitHub Icon"
            target="_blank"
          />
          <area
            title="Yuki's LinkedIn"
            shape="rect"
            coords="2050,565, 2205,720"
            href="https://www.linkedin.com/in/yuki-k-745115219/"
            alt="LinkedIn Icon"
            target="_blank"
          />
        </map>
      </header>
      <main className="container">
        <section id="sectionAbout" className="text-center m-2"></section>
        <section id="sectionLocation" className="text-center m-2"></section>
        <section id="sectionHistory" className="text-center m-2"></section>
        <section id="sectionTrivia" className="text-center m-2"></section>
        <br />
      </main>
      <footer>
        <div id="siteMapGroup" className="m-1">
          <span className="fw-bold p-0 m-0">
            <u style={{ color: "green" }}>Sitemap</u>
          </span>
          <ul className="list-group p-1">
            <li className="list-group-item">
              <a className="no-decor" href="#sectionAbout">
                <span>About</span>
              </a>
            </li>
            <li className="list-group-item">
              <a className="no-decor" href="#sectionLocation">
                <span>Locations</span>
              </a>
            </li>
            <li className="list-group-item">
              <a className="no-decor" href="#sectionHistory">
                <span>History</span>
              </a>
            </li>
            <li className="list-group-item">
              <a className="no-decor" href="#sectionTrivia">
                <span>Trivia</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center m-0">
          <span className="fw-bold">Copyright 2024</span>
          <br />
          Website created by <span className="fst-italic">Yuki Konishi</span>
        </div>
      </footer>
    </>
  );
}
