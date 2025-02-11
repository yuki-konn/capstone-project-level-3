export class LinkCard {
  openingTag = `<article class="card">
      <div class="card-body">`;
  closingTag = `</div></article>`;
  innerHTML = "";

  constructor(cardProperty) {
    this.innerHTML = `<h2 class="card-title">${cardProperty.title}</h2>
          <p>${cardProperty.desc1}</p>
          <p>${cardProperty.desc2}</p>
          <p>${cardProperty.desc3}</p>
          <a href="${cardProperty.link}">
            <button class="cardButton btn btn-success btn-sm">
            ${cardProperty.buttonName}
            </button>
          </a>`;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
