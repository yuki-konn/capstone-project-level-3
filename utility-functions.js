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

// ACCEPTS CARD OBJECT AND RETURNS A BOOTSTRAP BASIC CARD WITH TITLE AND IMAGE.
function convertCard( cardObject ) {
  let cardString = '<div class="card">';
  cardString += '<img class="card-img-top" src=" ' + cardObject.src + '">';
  cardString += '<div class="card-body">';
  cardString += '<h3 class="card-title">' + cardObject.title + '</h3>';
  cardString += cardObject.description;
  cardString += '</div>';
  cardString += '</div>';
  return cardString;
}