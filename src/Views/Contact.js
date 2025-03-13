import React, { useEffect, useState } from "react";
import { handleSubmitPhone } from "../controllers/handleSubmitPhone";
import "./Contact.scss";
import { getCheckedRadio } from "../modules/getCheckedRadio";
import { makeRequest } from "../utils/makeRequest";
import { parseContactResponse } from "../modules/parseContactResponse";
// import { handleSubmitContact } from "../controllers/handleSubmitContact";

export function Contact() {
  const [didMount, setDidMount] = useState(false);

  // OUTPUT FOR CONTACT FORM
  const [formData1, setFormData1] = useState(<></>);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [commentArea, setCommentArea] = useState(<></>);
  const [radioButtonArea, setRadioButtonArea] = useState(<></>);
  // FOR PROCESSING FORM
  const [serverResponse, setServerResponse] = useState(
    <b style={{ color: "gold" }}>Processing contact form...</b>
  );

  // LIFECYCLE COMPONENTS
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount, name]); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main id="contactMain" className="container-lg">
      <h1 className="text-center border-bottom border-3 border-dark">
        Contact Us
      </h1>
      <section>
        <h2 className="textShadow">Contact Form</h2>
        <form id="form1" onSubmit={handleSubmitContact}>
          <div className="row">
            <label className="col-2" htmlFor="contact-name" title="Required">
              Name *
            </label>
            <input
              required
              id="contact-name"
              className="col-10"
              type="text"
              name="contact-name"
              placeholder="John Smith"
            />
          </div>
          <div className="row">
            <label className="col-2" htmlFor="contact-email" title="Required">
              Email *
            </label>
            <input
              required
              id="contact-email"
              className="col-10"
              type="email"
              name="contact-email"
              placeholder="email@email.com"
            />
          </div>
          <div className="row">
            <label htmlFor="contact-comment">Comment (Optional)</label>
            <textarea id="contact-comment" className="w100"></textarea>
          </div>
          <fieldset>
            <legend>Tea Cup Rating (Optional)</legend>
            <div id="ratingDiv">
              <label htmlFor="rating-five">
                5 <i className="bi bi-cup-hot-fill"></i>
              </label>
              <input
                id="rating-five"
                name="ratings"
                type="radio"
                aria-label="5 cups of tea!"
              />
              <label htmlFor="rating-four">
                4 <i className="bi bi-cup-hot-fill"></i>
              </label>
              <input
                id="rating-four"
                name="ratings"
                type="radio"
                aria-label="4 cups of tea!"
              />
              <label htmlFor="rating-three">
                3 <i className="bi bi-cup-hot-fill"></i>
              </label>
              <input
                id="rating-three"
                name="ratings"
                type="radio"
                aria-label="3 cups of tea!"
              />
              <label htmlFor="rating-two">
                2 <i className="bi bi-cup-hot-fill"></i>
              </label>
              <input
                id="rating-two"
                name="ratings"
                type="radio"
                aria-label="2 cups of tea!"
              />
              <label htmlFor="rating-one">
                1 <i className="bi bi-cup-hot-fill"></i>
              </label>
              <input
                id="rating-one"
                name="ratings"
                type="radio"
                aria-label="1 cup of tea!"
              />
            </div>
          </fieldset>
          <input className="w100" type="submit" />
        </form>
        <br />
        {formData1}
        <br />
      </section>
      <section>
        <h2 className="textShadow">
          <i className="bi bi-telephone"></i> Schedule a Phone Appointment
        </h2>

        <form onSubmit={handleSubmitPhone}>
          <div className="row">
            <label className="col-2" htmlFor="phone-name" title="Required">
              Name *
            </label>
            <input
              required
              id="phone-name"
              className="col-10"
              type="text"
              name="phone-name"
              placeholder="John Smith"
            />
          </div>
          <div className="row">
            <label className="col-2" htmlFor="phone-number" title="Required">
              Phone Number *
            </label>
            <input
              required
              id="phone-number"
              className="col-10"
              type="tel"
              name="phone-number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="###-###-####"
            />
          </div>
          <div className="row">
            <label className="col-2" htmlFor="phone-date-time" title="Required">
              Appointment Time *
            </label>
            <input
              required
              id="phone-date-time"
              className="col-10"
              type="datetime-local"
            />
          </div>
          <input className="w100" type="submit" />
        </form>
        <br />
        <div
          id="phoneOutputTag"
          className="border border-3 border-dark text-center"
        >
          {/* {formOutput2} */}
        </div>
        <br />
      </section>
    </main>
  );

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | CONTACT";
    setDidMount(true);
    console.log("The Contact component has mounted.");
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The Contact component has updated.");
      // RUNS AFTER handleSubmitContact IS CLICKED.
      if (name) {
        setFormData1(
          <div
            id="outputTag1"
            className="border border-3 border-dark text-center"
          >
            {serverResponse}
            <br />
            <div>
              <span>
                <u>Form Info</u>
              </span>
              <br />
              <span>Name: {name}</span>
              <br />
              <span>Email: {email}</span>
              <br />
              <span>Comment: {commentArea}</span>
              <br />
              <span>Rating: {radioButtonArea}</span>
              <br />
              --------------
              <br />
            </div>
          </div>
        );
      }
    }
  }

  function handleSubmitContact(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const comment = event.target[2].value;

    setName(name);
    setEmail(email);
    setFormData1(
      <div id="outputTag1" className="border border-3 border-dark text-center">
        {serverResponse}
      </div>
    );

    // ADDS INPUTTED COMMENT
    setCommentArea(comment);

    // CHECKS TO SEE WHICH RADIO BUTTON IS SELECTED
    const ratingFeedback = getCheckedRadio(event);
    // ADDS INPUTTED RATING
    setRadioButtonArea(ratingFeedback);

    // SERVER DATA RETRIEVAL
    getServerFeedback();
  }

  function getServerFeedback() {
    // PROMISE
    const promise = makeRequest("https://myserver.com");
    // RESPONSE FROM SERVER
    let response = promise.then(parseContactResponse);
    // CHANGES FROM PROCESSING TO SUCCESSFULLY SUBMITTED
    setServerResponse(<b style={{ color: "green" }}>{response}</b>);
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  return function () {
    console.log("The Contact component has unmounted.");
  };
}
