import { viewResponse } from "./viewResponse.js";

// index.html
export function parseResponse(fetchObject) {
  debugger;
  const promise = fetchObject.text();
  promise.then(viewResponse);
}
