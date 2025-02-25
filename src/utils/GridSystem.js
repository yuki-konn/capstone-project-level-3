import { Row } from "./Row.js";

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

// WAS TRYING TO GET THIS TO WORK WITH useState
// export class GridSystem {
//   openingTag = "<div class='container-fluid'>";
//   closingTag = "</div>";
//   innerHTML = "";

//   addRow(row = new Row()) {
//     this.innerHTML += row;
//   }

//   toString() {
//     return (
//       <>
//         {this.openingTag}
//         {this.innerHTML}
//         {this.closingTag}
//       </>
//     );
//     // return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
//   }
// }
