import { output } from "../utils/output.js";

// PARSE RESPONSE FOR CONTACT FORM contact.html
export function parseContactResponse(resolveValue) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message);
}
