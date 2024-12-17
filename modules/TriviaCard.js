export class TriviaCard {
  openingTag = `<article class="card">
       <div class="card-body">`;
  closingTag = `</div></article>`;
  innerHTML = "";

  debugger;
  constructor(cardProperty) {
    this.innerHTML = `<h2 class="card-title">${cardProperty.title}</h2>
        <div id="outputTag" class="p-3"></div>
        <button onclick="handleClickApi(event)" class="cardButton btn btn-success btn-sm">
        ${cardProperty.buttonName}
        </button>`;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
