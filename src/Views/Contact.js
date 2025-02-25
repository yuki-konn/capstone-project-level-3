import React, { useEffect, useState } from "react";
import { handleSubmitPhone } from "../controllers/handleSubmitPhone";
import { handleSubmitContact } from "../controllers/handleSubmitContact";
import "./Contact.scss";

export function Contact() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main id="contactMain" className="container-lg">
      <h1 className="text-center border-bottom border-3 border-dark">
        Contact Us
      </h1>
      <section>
        <h2 className="textShadow">Contact Form</h2>
        <form onSubmit={handleSubmitContact}>
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
            <legend>Rating (Optional)</legend>
            <div id="ratingDiv">
              <label htmlFor="rating-five">5&#9733;</label>
              <input
                id="rating-five"
                name="ratings"
                type="radio"
                aria-label="5 Star rating"
              />
              <label htmlFor="rating-four">4&#9733;</label>
              <input
                id="rating-four"
                name="ratings"
                type="radio"
                aria-label="4 Star rating"
              />
              <label htmlFor="rating-three">3&#9733;</label>
              <input
                id="rating-three"
                name="ratings"
                type="radio"
                aria-label="3 Star rating"
              />
              <label htmlFor="rating-two">2&#9733;</label>
              <input
                id="rating-two"
                name="ratings"
                type="radio"
                aria-label="2 Star rating"
              />
              <label htmlFor="rating-one">1&#9733;</label>
              <input
                id="rating-one"
                name="ratings"
                type="radio"
                aria-label="1 Star rating"
              />
            </div>
          </fieldset>
          <input className="w100" type="submit" />
        </form>
        <br />
        <div
          id="outputTag"
          className="border border-3 border-dark text-center"
        ></div>
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
        ></div>
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
    }
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  return unmountMessage;
}
function unmountMessage() {
  console.log("The Contact component has unmounted.");
}
