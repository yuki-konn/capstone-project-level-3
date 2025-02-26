import React from "react";
export class Column {
  columnContent = (<></>);

  constructor(content = <></>) {
    this.columnContent = <div className="col">{content}</div>;
  }
}
