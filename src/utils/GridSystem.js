import { Row } from "./Row.js";

// CREATE BOOTSTRAP CONTAINER FUNCTION shop.html
export class GridSystem {
  openingTag = "<div class='container-fluid'>";
  closingTag = "</div>";
  innerHTML = "";

  addRow(row = new Row()) {
    this.innerHTML += row;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
