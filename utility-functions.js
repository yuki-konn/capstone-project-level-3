// CARD FUNCTIONS START

// BOOTSTRAP CARD FUNCTION FOR index.html
function convertLinkCard(cardObject) {
  let cardString = `<div class="card">
  <div class="card-body">
  <h2 class="card-title">${cardObject.title}</h2>
  <p>${cardObject.desc1}</p>
  <p>${cardObject.desc2}</p>
  <p>${cardObject.desc3}</p>
  <a href="${cardObject.link}">
    <button class="btn btn-success btn-sm">
    ${cardObject.buttonName}
    </button>
  </a>
  </div>
  </div>`;
  return cardString;
}
// CARD FUNCTIONS END

// BOOTSTRAP GRID SYSTEM FUNCTION START

// CREATE BOOTSTRAP COLUMN FUNCTION
function createColumn(contentString) {
  const columnString = `<div class="col">${contentString}</div>`;
  return columnString;
}

// CREATE BOOTSTRAP ROW FUNCTION
function createRow(columnsString) {
  const rowString = `<div class="row">${columnsString}</div>`;
  return rowString;
}

// CREATE ROWS FOR AN ARRAY OF COLUMNS
function createRows(columnsArray) {
  let rows = "";
  for (let position = 0; position < columnsArray.length; position++) {
    const columns = columnsArray[position];
    rows += createRow(columns);
  }
  return rows;
}

// CREATE BOOTSTRAP CONTAINER FUNCTION
function createContainer(rowsString) {
  const containerString = `<div class="container">${rowsString}</div>`;
  return containerString;
}
// BOOTSTRAP GRID SYSTEM FUNCTION END


// OUTPUT FUNCTION
function output(message) {
  outputTag.innerHTML += message;
}
