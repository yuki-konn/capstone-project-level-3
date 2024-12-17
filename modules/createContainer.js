// CREATE BOOTSTRAP CONTAINER FUNCTION shop.html
export function createContainer(rowsString) {
  const containerString = `<div class="container">${rowsString}</div>`;
  return containerString;
}
