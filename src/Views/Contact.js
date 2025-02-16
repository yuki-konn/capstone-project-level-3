import React, { useEffect, useState } from "react";
import { handleSubmitPhone } from "../controllers/handleSubmitPhone";
import { handleSubmitContact } from "../controllers/handleSubmitContact";
import "./contact.scss";

export function Contact() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main id="contactMain" className="container-lg contact-main">
      <h1 className="text-center border-bottom border-3 border-dark">
        Contact Us
      </h1>
      <section>
        <h2 className="textShadow">Contact Form</h2>
        <form onSubmit={handleSubmitContact}>
          <div className="row">
            <label className="col-1" htmlFor="contact-name">
              Name *
            </label>
            <input
              required
              id="contact-name"
              className="col-11"
              type="text"
              name="contact-name"
              placeholder="John Smith"
            />
          </div>
          <div className="row">
            <label className="col-1" htmlFor="contact-email">
              Email *
            </label>
            <input
              required
              id="contact-email"
              className="col-11"
              type="email"
              name="contact-email"
              placeholder="email@email.com"
            />
          </div>
          <div className="row">
            <label htmlFor="contact-comment">Comment (Optional)</label>
            <textarea id="contact-comment" className="w100"></textarea>
          </div>
          <div className="row">
            <label htmlFor="contact-ratings">Rating (Optional)</label>
            <section id="contact-ratings">
              <label htmlFor="rating-five">5&#9733;</label>
              <input
                id="rating-five"
                name="ratings"
                type="radio"
                aria-label="5 Star rating"
              />
              <br />
              <label htmlFor="rating-four">4&#9733;</label>
              <input
                id="rating-four"
                name="ratings"
                type="radio"
                aria-label="4 Star rating"
              />
              <br />
              <label htmlFor="rating-three">3&#9733;</label>
              <input
                id="rating-three"
                name="ratings"
                type="radio"
                aria-label="3 Star rating"
              />
              <br />
              <label htmlFor="rating-two">2&#9733;</label>
              <input
                id="rating-two"
                name="ratings"
                type="radio"
                aria-label="2 Star rating"
              />
              <br />
              <label htmlFor="rating-one">1&#9733;</label>
              <input
                id="rating-one"
                name="ratings"
                type="radio"
                aria-label="1 Star rating"
              />
              <br />
            </section>
          </div>
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
        <h2 className="textShadow">Schedule a Phone Appointment</h2>
        <form onSubmit={handleSubmitPhone}>
          <div className="row">
            <label className="col-1" htmlFor="phone-name">
              Name *
            </label>
            <input
              required
              id="phone-name"
              className="col-11"
              type="text"
              name="phone-name"
              placeholder="John Smith"
            />
          </div>
          <div className="row">
            <label className="col-2" htmlFor="phone-number">
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
            <label className="col-3" htmlFor="phone-date-time">
              Appointment Time *
            </label>
            <input
              id="phone-date-time"
              className="col-9"
              type="datetime-local"
              required
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
    console.log("The Contact component has updated.");
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
