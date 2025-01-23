import { output } from "../utils/output.js";

// PARSE RESPONSE FOR CONTACT FORM contact.html
export function parseResponse1(resolveValue) {
  debugger;
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message);
}
