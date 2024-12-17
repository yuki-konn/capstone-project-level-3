// TRIVIA CARD index.html
export function convertTriviaCard(cardObject) {
  let cardString = `<article class="card">
      <div class="card-body">
      <h2 class="card-title">${cardObject.title}</h2>
      <div id="outputTag" class="p-3"></div>
      <button onclick="handleClickApi(event)" class="cardButton btn btn-success btn-sm">
      ${cardObject.buttonName}
      </button>
      </div>
      </article>`;
  return cardString;
}
