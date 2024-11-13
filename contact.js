function handleSubmitContact(event) {
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
    makePromise(1);
  } else {
  }
}

function handleSubmitPhone(event) {
  class PhoneObject {
    name = value[0];
    phoneNumber = value[1];
    appointment = value[2];
  }
  event.preventDefault();
  const form = event.target;

  const nameInput = form[0];
  const telInput = form[1];
  const dateTimeInput = form[2];

  const value = [nameInput.value, telInput.value, dateTimeInput.value];

  // PARSE USED TO STRINGIFY OBJECT
  const phoneObject = new PhoneObject();
  const jsonString = JSON.stringify(phoneObject);
  const jsonP = JSON.parse(jsonString);
  const jsonForm =
    "<br><u>Form Info</u><br>" +
    "Name: " +
    jsonP.name +
    "<br>" +
    "Phone Number: " +
    jsonP.phoneNumber +
    "<br>" +
    "Appointment: " +
    jsonP.appointment +
    "<br>--------------<br><br>";

  debugger;
  output2(
    "<b style='color: gold'>Processing phone appointment form...</b><br>"
  );
  makePromise(2);
  output();

  function output() {
    output2(jsonForm);
  }
}

// PROMISE
function makePromise(param1) {
  debugger;
  if (param1 === 1) {
    const promise = new Promise(getServerResponse);
    promise.then(parseResponse1);
  } else if (param1 === 2) {
    const promise = new Promise(getServerResponse);
    promise.then(parseResponse2);
  }
}

// SERVER RESPONSE
function getServerResponse(resolve) {
  debugger;
  setTimeout(activateResolve, 5000);
  function activateResolve() {
    const response = {
      message: "<b style='color: green'>SUCCESSFULLY PROCESSED</b>",
    };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}

// PARSE RESPONSE FOR CONTACT FORM
function parseResponse1(resolveValue) {
  debugger;
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message);
}
// PARSE RESPONSE FOR PHONE APPOINTMENT FORM
function parseResponse2(resolveValue) {
  debugger;
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output2(message);
}
