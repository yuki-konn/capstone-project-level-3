import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { handleClickAddCart } from "../controllers/handleClickAddCart";
import { ShopCard } from "../modules/ShopCard.js";
import { createRows } from "../modules/createRows.js";
import { Column } from "../utils/Column.js";
import { GridSystem } from "../utils/GridSystem.js";
import "./shop.scss";

export function Shop() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <>
      <header>
        <Navbar />
        <img
          id="banner-img"
          className="bannerImage2 border-bottom border-top border-black border-5"
        />
      </header>
      <main id="shopMain">
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
              <button id="addCartButton1" onClick={handleClick}>
                Add to Cart
              </button>
            </li>
            <li id="cart2" className="list-group-item">
              Green Tea:
              <button id="addCartButton2" onClick={handleClick}>
                Add to Cart
              </button>
            </li>
            <li id="cart3" className="list-group-item">
              White Tea:
              <button id="addCartButton3" onClick={handleClick}>
                Add to Cart
              </button>
            </li>
            <li id="cart4" className="list-group-item">
              Oolong Tea:
              <button id="addCartButton4" onClick={handleClick}>
                Add to Cart
              </button>
              <span className="badge bg-info">50% OFF SUMMER SALE</span>
            </li>
            <li id="cart5" className="list-group-item">
              Pu-erh Tea:
              <button id="addCartButton5" onClick={handleClick}>
                Add to Cart
              </button>
              <span className="badge bg-info">50% OFF SUMMER SALE</span>
            </li>
            <li id="cart6" className="list-group-item">
              Purple Tea:
              <button id="addCartButton6" onClick={handleClick}>
                Add to Cart
              </button>
            </li>
            <li id="cart7" className="list-group-item">
              Matcha Tea:
              <button id="addCartButton7" onClick={handleClick}>
                Add to Cart
              </button>
            </li>
            <li id="cart8" className="list-group-item">
              Mate Tea:
              <button id="addCartButton8" onClick={handleClick}>
                Add to Cart
              </button>
            </li>
            <li id="cart9" className="list-group-item">
              Herbal Tea:
              <button id="addCartButton9" onClick={handleClick}>
                Add to Cart
              </button>
              <span className="badge bg-info">50% OFF SUMMER SALE</span>
            </li>
            <li id="cart10" className="list-group-item">
              Rooibos Tea:
              <button id="addCartButton10" onClick={handleClick}>
                Add to Cart
              </button>
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

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | SHOP";

    // card objects
    const teaCard1 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cup_of_black_tea.JPG/1024px-Cup_of_black_tea.JPG",
      title: "Black Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard2 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/36/Green_tea_3_appearances.jpg",
      title: "Green Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard3 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bai_Hao_Yinzhen_or_Silver_needle_White_Tea.JPG/1024px-Bai_Hao_Yinzhen_or_Silver_needle_White_Tea.JPG",
      title: "White Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard4 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/1024px-Tieguanyin2.jpg",
      title: "Oolong Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard5 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg/1024px-%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg",
      title: "Pu-erh Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard6 = {
      src: "https://cdn.shopify.com/s/files/1/0003/9596/8567/t/33/assets/purplewholeleafpromo5-1682524254793_1000x.jpg?v=1682524259",
      title: "Purple Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard7 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Matcha_%286328677556%29.jpg/220px-Matcha_%286328677556%29.jpg",
      title: "Matcha Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard8 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mate_en_calabaza.jpg/800px-Mate_en_calabaza.jpg",
      title: "Mate Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard9 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Butterfly-pea_flower_tea_3.jpg/1024px-Butterfly-pea_flower_tea_3.jpg",
      title: "Herbal Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard10 = {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Frisch_aufgebr%C3%BChter_Rooibos.jpg/1024px-Frisch_aufgebr%C3%BChter_Rooibos.jpg",
      title: "Rooibos Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };

    // card array with objects
    const teaCards = [
      teaCard1,
      teaCard2,
      teaCard3,
      teaCard4,
      teaCard5,
      teaCard6,
      teaCard7,
      teaCard8,
      teaCard9,
      teaCard10,
    ];

    // converts card array positions to cards then adds them to column groups.
    const groupColumns = [];
    let position = 0;
    do {
      let columns = "";
      for (let count = 0; count < 5; count++) {
        const content = teaCards[position];
        const contentCard = new ShopCard(content);
        columns += new Column(contentCard);
        position++;
      }
      groupColumns.push(columns);
    } while (position < teaCards.length);

    debugger;
    const rows = createRows(groupColumns);
    const container = new GridSystem();
    container.addRow(rows);
    const sectionTea = document.getElementById("sectionTea");
    sectionTea.innerHTML += container;

    setDidMount(true);
    console.log("The Shop component has mounted.");
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The Shop component has updated.");
    }
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  return unmountMessage;
}
function unmountMessage() {
  console.log("The Shop component has unmounted.");
}

// PASSES PARAMETER TO A MORE SPECIFIC HANDLER
function handleClick(event) {
  let buttonId = event.target.id; // GETS THE ID OF BUTTON THATS CLICKED. USED THIS INSTEAD OF getElementById BECAUSE I WANTED EACH BUTTON TO GIVE ME A DIFFERENT ID.
  handleClickAddCart(event, buttonId);
}
