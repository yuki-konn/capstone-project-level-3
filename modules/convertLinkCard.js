// BOOTSTRAP CARD FUNCTION FOR index.html
export function convertLinkCard(cardObject) {
  let cardString = `<article class="card">
    <div class="card-body">
    <h2 class="card-title">${cardObject.title}</h2>
    <p>${cardObject.desc1}</p>
    <p>${cardObject.desc2}</p>
    <p>${cardObject.desc3}</p>
    <a href="${cardObject.link}">
      <button class="cardButton btn btn-success btn-sm">
      ${cardObject.buttonName}
      </button>
    </a>
    </div>
    </article>`;
  return cardString;
}
