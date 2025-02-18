import { Column } from "./Column.js";

export class Row {
  openingTag = "<div class='row-cols-2 row-cols-md-3'>";
  closingTag = "</div>";
  innerHTML = "";

  addColumn(column = new Column()) {
    this.innerHTML += column;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
