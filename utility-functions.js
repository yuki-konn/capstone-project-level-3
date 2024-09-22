// DISPLAY MESSAGE FUNCTION
function display(message) {
  document.write(message);
}

// APPEND MESSAGE TO OUTPUTTAG
function output(message) {
  window.outputTag.innerHTML = window.outputTag.innerHTML + message;
}

// PROMPT MESSAGE WITH FUNCTION AND DETERMINE IF IT'S A NUMBER OR STRING.
function ask(myMessage) {
  const userText = prompt(myMessage);
  const userNumber = Number(userText);
  const isNotNumber = isNaN(userNumber);
  if (isNotNumber) {
    return userText;
  } else {
    return userNumber;
  }
}

// CARD FUNCTIONS START
// ACCEPTS CARD OBJECT AND RETURNS A BOOTSTRAP BASIC CARD WITH IMAGE, TITLE, AND DESCRIPTION.
function convertCard(cardObject) {
  let cardString = `<div class="card">
  <img class="card-img-top" src="${cardObject.src}">
  <div class="card-body">
  <h3 class="card-title">${cardObject.title}</h3>
  ${cardObject.description}
  </div>
  </div>`;
  return cardString;
}

// CUSTOM IMAGE CARD
function convertImgCard(cardObject) {
  let cardString = `<div class="card">
  <img class="card-img-top" src="${cardObject.src}">
  <div class="card-body">
  <h3 class="card-title">${cardObject.title}</h3>
  ${cardObject.description}
  </div>
  </div>`;
  return cardString;
}

// CUSTOM LINK CARD
// ACCEPTS CARD OBJECT AND RETURNS A BOOTSTRAP BASIC CARD WITH TITLE AND DESCRIPTION.
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
//

// CREATE BOOTSTRAP COLUMN FUNCTION
function createColumn(contentString) {
  const columnString = `<div class="col">${contentString}</div>`;
  return columnString;
}

// CREATE MULTIPLE BOOTSTRAP COLUMNS
function createColumns(contentsArray) {
  let columnString = "";
  for (let position = 0; position < contentsArray.length; position++) {
    const content = contentsArray[position];
    columnString += createColumn(content);
  }
  return columnString;
}

// CREATE BOOTSTRAP COLUMN WITH MULTIPLE GROUPS
function createColumnGroups(contentsArray, grouping) {
  const myColumns = [];
  let position = 0;
  do {
    let columns = "";
    for (let count = 0; count < grouping; count++) {
      const content = contentsArray[position];
      if (content !== undefined) {
        columns += createColumn(content);
      }
      position++;
    }
    myColumns.push(columns);
  } while (position < contentsArray.length);
  return myColumns;
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
