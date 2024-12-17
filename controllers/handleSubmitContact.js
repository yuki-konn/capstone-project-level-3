import { parseResponse1 } from "../modules/parseResponse1.js";
import { makeRequest } from "../utils/makeRequest.js";
import { output } from "../utils/output.js";

window.handleSubmitContact = handleSubmitContact;

// CONTACT FORM SUBMIT HANDLER
function handleSubmitContact(event = new Event()) {
  event.preventDefault();
  const form = event.target;
  const nameInput = form[0];
  const emailInput = form[1];
  const commentInput = form[2];

  const fiveStar = form[3];
  const fourStar = form[4];
  const threeStar = form[5];
  const twoStar = form[6];
  const oneStar = form[7];

  // ARRAY FOR FORM VALUES
  const value = [
    nameInput.value,
    emailInput.value,
    commentInput.value,
    fiveStar.ariaLabel,
    fourStar.ariaLabel,
    threeStar.ariaLabel,
    twoStar.ariaLabel,
    oneStar.ariaLabel,
  ];

  // CHECKS TO SEE IF A FORM HAS BEEN SUBMITTED OR NOT.
  if (outputTag.innerHTML === "") {
    debugger;

    output("<b style='color: gold'>Processing contact form...<b><br>");
    output("<br><u>Form Info<u><br>");
    output(`Name: ${value[0]}<br>`);
    output(`Email: ${value[1]}<br>`);

    // CHECKS TO SEE IF TEXTAREA IS EMPTY
    if (value[2] === "") {
      output("");
    } else {
      output(`Comment: ${value[2]}<br>`);
    }

    // CHECKS TO SEE WHICH RADIO BUTTON IS SELECTED
    if (fiveStar.checked) {
      output(`Rating: ${value[3]}<br>`);
    } else if (fourStar.checked) {
      output(`Rating: ${value[4]}<br>`);
    } else if (threeStar.checked) {
      output(`Rating: ${value[5]}<br>`);
    } else if (twoStar.checked) {
      output(`Rating: ${value[6]}<br>`);
    } else if (oneStar.checked) {
      output(`Rating: ${value[7]}<br>`);
    } else {
      output("");
    }

    output("--------------<br><br>");
    const promise = makeRequest("https://myserver.com");
    promise.then(parseResponse1);
  } else {
  }
}
