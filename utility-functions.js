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

// ACCEPTS CARD OBJECT AND RETURNS A BOOTSTRAP BASIC CARD WITH IMAGE, TITLE, AND DESCRIPTION.
function convertImgCard(cardObject) {
  let cardString = '<div class="card">';
  cardString += '<img class="card-img-top" src=" ' + cardObject.src + '">';
  cardString += '<div class="card-body">';
  cardString += '<h3 class="card-title">' + cardObject.title + "</h3>";
  cardString += cardObject.description;
  cardString += "</div>";
  cardString += "</div>";
  return cardString;
}

// ACCEPTS CARD OBJECT AND RETURNS A BOOTSTRAP BASIC CARD WITH TITLE AND DESCRIPTION.
function convertLinkCard(cardObject) {
  let cardString = '<div class="card">';
  cardString += '<div class="card-body">';
  cardString += '<h2 class="card-title">' + cardObject.title + "</h2>";
  cardString += "<p>" + cardObject.desc1 + "</p>";
  cardString += "<p>" + cardObject.desc2 + "</p>";
  cardString += "<p>" + cardObject.desc3 + "</p>";
  cardString += '<a href="' + cardObject.link + '">';
  cardString +=
    '<button class="btn btn-success btn-sm">' +
    cardObject.buttonName +
    "</button>";
  cardString += "</a>";
  cardString += "</div>";
  cardString += "</div>";
  return cardString;
}
//BOOTSTRAP GRID SYSTEM FUNCTION
