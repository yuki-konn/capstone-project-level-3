import React from "react";
import { NavLink } from "react-router";
import "../index.scss";

export function CollapsibleNavbar() {
  const domain = window.location.hostname;
  let rootpath = "";
  if (domain === "yuki-konn.github.io") rootpath = "/capstone-project-level-3";

  return (
    <nav id="collapsibleNavbar" class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <div id="homeNavDiv" class="nav-item m-2">
          <NavLink
            class="navbar-brand"
            to={`${rootpath}/`}
            end
            aria-current="page"
          >
            Home
          </NavLink>
        </div>

        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <NavLink class="nav-item nav-link" to={`${rootpath}/shop`}>
              Shop
            </NavLink>
            <NavLink class="nav-item nav-link" to={`${rootpath}/about`}>
              About
            </NavLink>
            <NavLink class="nav-item nav-link" to={`${rootpath}/contact`}>
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
