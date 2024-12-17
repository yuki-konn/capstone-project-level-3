// shop.html
export function convertShopCard(cardObject) {
  let cardString = `<article class="card border border-success border-2">
      <img class="card-img-top" src="${cardObject.src}">
      <div class="card-body">
      <h3 class="card-title">${cardObject.title}</h3>
      ${cardObject.description}
      </div>
      </article>`;
  return cardString;
}
