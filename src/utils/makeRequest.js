import { getServerResponse } from "./getServerResponse.js";

// PROMISE contact.html
export function makeRequest(url, param) {
  return new Promise(getServerResponse);
}
