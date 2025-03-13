// import { output } from "../utils/output.js";
import React from "react";

// PARSE RESPONSE FOR CONTACT FORM contact.html
export function parseContactResponse(resolveValue) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  return message;
  // output(message);
}
