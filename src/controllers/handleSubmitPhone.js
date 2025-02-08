import { parsePhoneResponse } from "../modules/parsePhoneResponse.js";
import { PhoneObject } from "../modules/PhoneObject.js";
import { makeRequest } from "../utils/makeRequest.js";
import { output } from "../utils/output.js";

window.handleSubmitPhone = handleSubmitPhone;
// PHONE APPOINTMENT FORM SUBMIT HANDLER
export function handleSubmitPhone(event = new Event()) {
  event.preventDefault();
  debugger;
  const form = event.target;

  const nameInput = form[0];
  const telInput = form[1];
  const dateTimeInput = form[2];

  const value = [nameInput.value, telInput.value, dateTimeInput.value];

  // NEW OBJECT WITH VALUES ASSIGNED
  const phoneObject = new PhoneObject();
  phoneObject.name = value[0];
  phoneObject.phoneNumber = value[1];
  phoneObject.appointment = value[2];

  // PARSE USED TO STRINGIFY OBJECT
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

  output(
    "<b style='color: gold'>Processing phone appointment form...</b><br>",
    "phoneOutputTag"
  );
  const promise = makeRequest("https://myserver.com");
  promise.then(parsePhoneResponse);
  output(jsonForm, "phoneOutputTag");
}
