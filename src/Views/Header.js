import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import banner1 from "../../assets/images/banner1.png";
import { CollapsibleNavbar } from "./CollapsibleNavbar";

export function Header() {
  useEffect(componentDidMount, []);
  return (
    <header>
      <CollapsibleNavbar />
      {/* <Navbar /> */}
      <img
        id="banner-img"
        className="border-bottom border-top border-black border-5"
        width="100%"
        src={banner1}
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
  );

  function componentDidMount() {
    imageMapResize();
  }
}
