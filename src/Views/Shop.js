import React, { useEffect, useState } from "react";
import { handleClickAddCart } from "../controllers/handleClickAddCart";
import { ShopCard } from "../modules/ShopCard.js";
import { createRows } from "../modules/createRows.js";
import { Column } from "../utils/Column.js";
import { GridSystem } from "../utils/GridSystem.js";
import "./Shop.scss";
import blacktea from "../../assets/images/blacktea.png";
import greentea from "../../assets/images/greentea.jpg";
import whitetea from "../../assets/images/whitetea.jpg";
import oolongtea from "../../assets/images/oolongtea.png";
import puerhtea from "../../assets/images/puerhtea.png";
import purpletea from "../../assets/images/purpletea.jpg";
import matchatea from "../../assets/images/matchatea.jpg";
import matetea from "../../assets/images/matetea.jpg";
import herbaltea from "../../assets/images/herbaltea.png";
import rooibostea from "../../assets/images/rooibostea.png";

export function Shop() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main id="shopMain" className="container-lg">
      <section className="m-1" id="sectionTea">
        <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
          Products
        </h2>
      </section>
      <br />
      <section id="sectionCart" className="container-fluid">
        <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
          Items in Cart
        </h2>
        <div className="row row-cols-lg-5">
          <div id="cart1" className="col-12 col-md-6">
            <h4>Black Tea</h4>
            <br />
            <button id="addCartButton1" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart2" className="col-12 col-md-6">
            <h4>Green Tea</h4>
            <br />
            <button id="addCartButton2" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart3" className="col-12 col-md-6">
            <h4>White Tea</h4>
            <br />
            <button id="addCartButton3" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart4" className="col-12 col-md-6">
            <h4>Oolong Tea</h4>
            <span className="badge bg-info col-12">50% OFF SUMMER SALE</span>
            <button id="addCartButton4" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart5" className="col-12 col-md-6">
            <h4>Pu-erh Tea</h4>
            <span className="badge bg-info col-12">50% OFF SUMMER SALE</span>
            <button id="addCartButton5" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>

          <div id="cart6" className="col-12 col-md-6">
            <h4>Purple Tea</h4>
            <br />
            <button id="addCartButton6" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart7" className="col-12 col-md-6">
            <h4>Matcha Tea</h4>
            <br />
            <button id="addCartButton7" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart8" className="col-12 col-md-6">
            <h4>Mate Tea</h4>
            <br />
            <button id="addCartButton8" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart9" className="col-12 col-md-6">
            <h4>Herbal Tea</h4>
            <span className="badge bg-info col-12">50% OFF SUMMER SALE</span>
            <button id="addCartButton9" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
          <div id="cart10" className="col-12 col-md-6">
            <h4>Rooibos Tea</h4>
            <br />
            <button id="addCartButton10" onClick={handleClick}>
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | SHOP";

    // card objects
    const teaCard1 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cup_of_black_tea.JPG/1024px-Cup_of_black_tea.JPG",
      src: blacktea,
      title: "Black Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard2 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/3/36/Green_tea_3_appearances.jpg",
      src: greentea,
      title: "Green Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard3 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bai_Hao_Yinzhen_or_Silver_needle_White_Tea.JPG/1024px-Bai_Hao_Yinzhen_or_Silver_needle_White_Tea.JPG",
      src: whitetea,
      title: "White Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard4 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/1024px-Tieguanyin2.jpg",
      src: oolongtea,
      title: "Oolong Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard5 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg/1024px-%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg",
      src: puerhtea,
      title: "Pu-erh Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard6 = {
      // src: "https://cdn.shopify.com/s/files/1/0003/9596/8567/t/33/assets/purplewholeleafpromo5-1682524254793_1000x.jpg?v=1682524259",
      src: purpletea,
      title: "Purple Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard7 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Matcha_%286328677556%29.jpg/220px-Matcha_%286328677556%29.jpg",
      src: matchatea,
      title: "Matcha Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard8 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mate_en_calabaza.jpg/800px-Mate_en_calabaza.jpg",
      src: matetea,
      title: "Mate Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard9 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Butterfly-pea_flower_tea_3.jpg/1024px-Butterfly-pea_flower_tea_3.jpg",
      src: herbaltea,
      title: "Herbal Tea",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    };
    const teaCard10 = {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Frisch_aufgebr%C3%BChter_Rooibos.jpg/1024px-Frisch_aufgebr%C3%BChter_Rooibos.jpg",
      src: rooibostea,
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
      for (let count = 0; count < teaCards.length; count++) {
        const content = teaCards[position];
        const contentCard = new ShopCard(content);
        columns += new Column(contentCard);
        position++;
      }
      groupColumns.push(columns);
    } while (position < teaCards.length);

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
