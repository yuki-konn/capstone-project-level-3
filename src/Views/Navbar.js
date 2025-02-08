import React from "react";
import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav className="nav nav-tabs nav-fill bg-dark">
      <NavLink to="/" className="nav-link fw-bold text-success">
        HOME
      </NavLink>
      <NavLink to="/shop" className="nav-link fw-bold text-success">
        SHOP
      </NavLink>
      <NavLink to="/about" className="nav-link fw-bold text-success">
        ABOUT
      </NavLink>
      <NavLink to="/contact" className="nav-link fw-bold text-success">
        CONTACT
      </NavLink>
    </nav>
  );
}
