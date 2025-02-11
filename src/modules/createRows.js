import { createRow } from "./createRow.js";

// CREATE ROWS FOR AN ARRAY OF COLUMNS shop.html
export function createRows(columnsArray) {
  let rows = "";
  for (let position = 0; position < columnsArray.length; position++) {
    const columns = columnsArray[position];
    rows += createRow(columns);
  }
  return rows;
}
