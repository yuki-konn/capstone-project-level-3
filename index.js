// API
function handleClick() {
  debugger;
  const url =
    "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple";
  const promise = fetch(url);
  promise.then(parseResponse);
}

function parseResponse(resolveValue) {
  debugger;
  const promise = resolveValue.text();
  promise.then(viewResponse);
}

function viewResponse(resolveValue) {
  debugger;
  const response = JSON.parse(resolveValue);
  const results = response.results;
  const item = results[0];
  const question = item.question;
  const answer = item.correct_answer;
  const incorrects = item.incorrect_answers;

  const trivia = `<form id="outputTag" onsubmit="handleSubmitTrivia(event)">
          <p>${question}</p>
          <label for="choice-A">a. ${incorrects[0]}</label>
          <input type="radio" id="choice-A" name="choices"><br>
          <label for="choice-B">b. ${incorrects[1]}</label>
          <input type="radio" id="choice-B" name="choices"><br>
          <label for="choice-C">c. ${answer}</label>
          <input type="radio" id="choice-C" name="choices"><br>
          <label for="choice-D">d. ${incorrects[2]}</label>
          <input type="radio" id="choice-D" name="choices"><br>
          <input type="submit">
        </form>`;

  output(trivia);
}

// TRIVIA CARD
function convertTriviaCard(cardObject) {
  let cardString = `<div class="card">
    <div class="card-body">
    <h2 class="card-title">${cardObject.title}</h2>
    <div id="outputTag" class="p-3"></div>
    <button onclick="handleClick(event)" class="cardButton btn btn-success btn-sm">
    ${cardObject.buttonName}
    </button>
    </div>
    </div>`;
  return cardString;
}

// WIP Radio button checker for trivia form for submit button
// (ask how to get onsubmit to work when its in a innerhtml that is called.)

// function handleSubmitTrivia(event) {
//   debugger;
//   event.preventDefault();
//   const form = event.target;
//   const choiceA = form[0];
//   const choiceB = form[1];
//   const choiceC = form[2];
//   const choiceD = form[3];
//   value = {}
//   if (choiceA === checked) {
//     output2("Wrong answer");
//   }
// }
