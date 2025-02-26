import { Row } from "./Row.js";
import React from "react";

export class GridSystem {
  content = (<></>);

  addRow(row = new Row()) {
    this.content = <div className="container-fluid">{row}</div>;
  }
}
