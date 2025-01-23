import React from "react";
import { Navbar } from "./Navbar";
import { handleClickAddCart } from "../controllers/handleClickAddCart";

export function Shop() {
  debugger;

  return (
    <>
      <header>
        <Navbar page="shop"></Navbar>
        <img
          id="banner-img"
          className="bannerImage2 border-bottom border-top border-black border-5"
        />
      </header>
      <main>
        <section className="m-1" id="sectionTea">
          <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
            Products
          </h2>
        </section>
        <section id="sectionCart">
          <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
            Items in Cart
          </h2>
          <ul className="list-group list-group-numbered container">
            <li id="cart1" className="list-group-item">
              Black Tea:
              <button onClick={handleClickAddCart(1)}>Add to Cart</button>
            </li>
            <li id="cart2" className="list-group-item">
              Green Tea:
              <button onClick={handleClickAddCart(2)}>Add to Cart</button>
            </li>
            <li id="cart3" className="list-group-item">
              White Tea:
              <button onClick={handleClickAddCart(3)}>Add to Cart</button>
            </li>
            <li id="cart4" className="list-group-item">
              Oolong Tea:
              <button onClick={handleClickAddCart(4)}>Add to Cart</button>
              <span className="badge bg-info">50% OFF SUMMER SALE</span>
            </li>
            <li id="cart5" className="list-group-item">
              Pu-erh Tea:
              <button onClick={handleClickAddCart(5)}>Add to Cart</button>
              <span className="badge bg-info">50% OFF SUMMER SALE</span>
            </li>
            <li id="cart6" className="list-group-item">
              Purple Tea:
              <button onClick={handleClickAddCart(6)}>Add to Cart</button>
            </li>
            <li id="cart7" className="list-group-item">
              Matcha Tea:
              <button onClick={handleClickAddCart(7)}>Add to Cart</button>
            </li>
            <li id="cart8" className="list-group-item">
              Mate Tea:
              <button onClick={handleClickAddCart(8)}>Add to Cart</button>
            </li>
            <li id="cart9" className="list-group-item">
              Herbal Tea:
              <button onClick={handleClickAddCart(9)}>Add to Cart</button>
              <span className="badge bg-info">50% OFF SUMMER SALE</span>
            </li>
            <li id="cart10" className="list-group-item">
              Rooibos Tea:
              <button onClick={handleClickAddCart(10)}>Add to Cart</button>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <div className="text-center">
          <span className="fw-bold">Copyright 2024</span>
          <br />
          Website created by <span className="fst-italic">Yuki Konishi</span>
        </div>
      </footer>
    </>
  );
}
