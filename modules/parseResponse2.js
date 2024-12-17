import { output } from "../utils/output.js";

// PARSE RESPONSE FOR PHONE APPOINTMENT FORM contact.html
export function parseResponse2(resolveValue) {
  debugger;
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message, "outputTag2");
}
