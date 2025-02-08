import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { handleSubmitPhone } from "../controllers/handleSubmitPhone";
import { handleSubmitContact } from "../controllers/handleSubmitContact";
import "./contact.scss";

export function Contact() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <>
      <header>
        <Navbar />
        <img
          id="banner-img"
          className="bannerImage2 border-bottom border-top border-black border-5"
        />
      </header>
      <main className="container contact-main">
        <h1 className="text-center border-bottom border-3 border-dark">
          Contact Us
        </h1>
        <section>
          <h2 className="textShadow">Contact Form</h2>
          <form onSubmit={handleSubmitContact}>
            <label htmlFor="contact-name">Name *</label>
            <input
              required
              id="contact-name"
              className="w100"
              type="text"
              name="contact-name"
              placeholder="John Smith"
            />
            <label htmlFor="contact-email">Email *</label>
            <br />
            <input
              required
              id="contact-email"
              className="w100"
              type="email"
              name="contact-email"
              placeholder="email@email.com"
            />
            <br />
            <label htmlFor="contact-comment">Comment (Optional)</label>
            <br />
            <textarea id="contact-comment" className="w100"></textarea>
            <br />
            <label htmlFor="contact-ratings">Rating (Optional)</label>
            <br />
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
            <input type="submit" />
          </form>
          <br />
          <div
            id="outputTag"
            className="border border-3 border-dark text-center"
          ></div>
          <br />
        </section>
        <section>
          <form onSubmit={handleSubmitPhone}>
            <h2 className="textShadow">Schedule a Phone Appointment</h2>
            <label htmlFor="phone-name">Name *</label>
            <br />
            <input
              required
              id="phone-name"
              type="text"
              name="phone-name"
              placeholder="John Smith"
            />
            <br />
            <label htmlFor="phone-number">Phone Number *</label>
            <br />
            <input
              required
              id="phone-number"
              type="tel"
              name="phone-number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="###-###-####"
            />
            <br />
            <label htmlFor="phone-date-time">Appointment Time *</label>
            <br />
            <input required id="phone-date-time" type="datetime-local" />
            <br />
            <br />
            <input type="submit" />
          </form>
          <br />
          <div
            id="phoneOutputTag"
            className="border border-3 border-dark text-center"
          ></div>
          <br />
        </section>
      </main>
      <footer>
        <div className="text-center">
          <span className="fw-bold">Copyright 2024</span>
          <br />
          Website created by <span className="fst-italic">Yuki Konishi</span>
        </div>
      </footer>
    </>
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
