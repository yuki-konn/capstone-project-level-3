import { Column } from "./Column.js";
import React from "react";

export class Row {
  rowContent = (<></>);

  addColumn(column = new Column()) {
    this.rowContent = (
      <div className="row-cols-2 row-cols-md-3 row-cols-lg-5">{column}</div>
    );
  }
}
