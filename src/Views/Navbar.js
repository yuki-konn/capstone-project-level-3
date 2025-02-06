import React from "react";
import { Link } from "react-router";

export function Navbar(props = "") {
  const page = props.page;
  // debugger;
  if (page === "home") {
    return (
      <nav className="nav nav-tabs nav-fill bg-dark">
        <Link to="/" className="nav-link active fw-bold text-success">
          HOME
        </Link>
        <Link to="/shop" className="nav-link fw-bold text-success">
          SHOP
        </Link>
        <Link to="/about" className="nav-link fw-bold text-success">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-link fw-bold text-success">
          CONTACT
        </Link>
      </nav>
    );
  }
  if (page === "shop") {
    return (
      <nav className="nav nav-tabs nav-fill bg-dark">
        <Link to="/" className="nav-link fw-bold text-success">
          HOME
        </Link>
        <Link to="/shop" className="nav-link active fw-bold text-success">
          SHOP
        </Link>
        <Link to="/about" className="nav-link fw-bold text-success">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-link fw-bold text-success">
          CONTACT
        </Link>
      </nav>
    );
  }
  if (page === "about") {
    return (
      <nav className="nav nav-tabs nav-fill bg-dark">
        <Link to="/" className="nav-link fw-bold text-success">
          HOME
        </Link>
        <Link to="/shop" className="nav-link fw-bold text-success">
          SHOP
        </Link>
        <Link to="/about" className="nav-link active fw-bold text-success">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-link fw-bold text-success">
          CONTACT
        </Link>
      </nav>
    );
  }
  if (page === "contact") {
    return (
      <nav className="nav nav-tabs nav-fill bg-dark">
        <Link to="/" className="nav-link fw-bold text-success">
          HOME
        </Link>
        <Link to="/shop" className="nav-link fw-bold text-success">
          SHOP
        </Link>
        <Link to="/about" className="nav-link fw-bold text-success">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-link active fw-bold text-success">
          CONTACT
        </Link>
      </nav>
    );
  } else {
    console.log(
      "There is no page parameter. The parameter options are home, shop, about and contact."
    );
  }
}
