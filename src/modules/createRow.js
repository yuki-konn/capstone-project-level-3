// CREATE BOOTSTRAP ROW FUNCTION shop.html
export function createRow(columnsString) {
  const rowString = `<div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">${columnsString}</div>`;
  return rowString;
}
