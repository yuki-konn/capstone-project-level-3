export class ShopCard {
  openingTag = `<article class="card border border-success border-2">`;
  closingTag = `</div></article>`;
  innerHTML = "";

  constructor(cardProperty) {
    this.innerHTML = `<img class="card-img-top" id="${cardProperty.id}" src="${cardProperty.src}" data-bs-title="${cardProperty.tooltipTitle}" data-bs-toggle="tooltip">
        <div class="card-body">
        <h3 class="card-title">${cardProperty.title}</h3>
        ${cardProperty.description}`;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
