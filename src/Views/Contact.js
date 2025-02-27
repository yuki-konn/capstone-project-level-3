import React, { useEffect, useState } from "react";
import { handleSubmitPhone } from "../controllers/handleSubmitPhone";
import { handleSubmitContact } from "../controllers/handleSubmitContact";
import "./Contact.scss";

export function Contact() {
  const [didMount, setDidMount] = useState(false);

  // OUTPUT FOR CONTACT FORM
  // const [formOutput1, setFormOutput1] = useState(<></>);
  // OUTPUT FOR PHONE FORM
  // const [formOutput2, setFormOutput2] = useState(<></>);

  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount]); // UPDATE HOOK
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
        <div id="outputTag" className="border border-3 border-dark text-center">
          {/* {formOutput1} */}
        </div>
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

      // might have to put in if statement to check which form is clicked.
      // setFormOutput1();
      // setFormOutput2();
    }
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  return function () {
    console.log("The Contact component has unmounted.");
  };
}
