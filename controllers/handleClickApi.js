import { parseResponse } from "../modules/parseResponse.js";

window.handleClickApi = handleClickApi;
// API index.html
function handleClickApi(event = new Event()) {
  debugger;
  const url =
    "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple";
  const promise = fetch(url);
  promise.then(parseResponse);
}
