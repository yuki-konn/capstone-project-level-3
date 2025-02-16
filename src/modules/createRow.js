// CREATE BOOTSTRAP ROW FUNCTION shop.html
export function createRow(columnsString) {
  const rowString = `<div class="row row-cols-2">${columnsString}</div>`;
  return rowString;
}
