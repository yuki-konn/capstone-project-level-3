import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import "./about.scss";

export function About() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main className="container">
      <h2 className="m-2 text-center border border-3 border-success bg-warning">
        ABOUT
      </h2>
      <p className="m-2 text-center border-3 border-success bg-warning">
        This page is to better explain the features of my project.
      </p>
      <article id="article1" className="m-2 p-2 bg-white border-dashed">
        <h3 className="textShadow text-center">
          Coding difference between Level 1 and Level 2
        </h3>
        <ul className="list-group-numbered list-group border border-3 border-success">
          <li className="list-group-item">
            Created image map to <code>index.html</code> banner image.
          </li>
          <li className="list-group-item">
            Created button animation using SASS and mixins to buttons in
            <code>index.html</code>.
          </li>
          <li className="list-group-item">
            Added <code>opacity</code> to the footer.
          </li>
          <li className="list-group-item">
            Added <code>background-image</code> to all pages.
          </li>
          <li className="list-group-item">
            Added custom <code>font</code> to all pages.
          </li>
          <li className="list-group-item">
            Updated <code>about.html</code> with new articles.
          </li>
          <li className="list-group-item">
            Added Site map to <code>about.html</code>.
          </li>
          <li className="list-group-item">
            Created form process for both forms in <code>contact.html</code> and
            <code>contact.js</code>.
          </li>
          <li className="list-group-item">
            Created server simulation for both forms in
            <code>contact.html</code> and <code>contact.js</code>.
          </li>
          <li className="list-group-item">
            Added OpenTBD REST API to create a trivia card in
            <code>index.html</code>.
          </li>
          <li className="list-group-item">Created SASS for all pages.</li>
          <li className="list-group-item">
            Created <u>docs</u> folder for all <i>.md</i> files except
            <code>README.md</code>.
          </li>
          <li className="list-group-item">
            Created <u>res</u> folder for all <i>fonts</i> and <i>images</i>.
          </li>
        </ul>
      </article>
      <article id="article2" className="m-2 p-2 bg-white border-dashed">
        <h3 className="textShadow text-center">New Features</h3>
        <ul className="list-group-numbered list-group border border-3 border-success">
          <li className="list-group-item">
            Image map on banner image with links to my gitHub and Linkedin.
          </li>
          <li className="list-group-item">Animated buttons</li>
          <li className="list-group-item">
            Form submission processes with server simulation.
          </li>
          <li className="list-group-item">
            Created random trivia card on Home page.
          </li>
        </ul>
      </article>
      <div id="siteMapGroup" className="m-1">
        <span className="fw-bold p-0 m-0">
          <u style={{ color: "green" }}>Sitemap</u>
        </span>
        <ul className="list-group p-1">
          <li className="list-group-item">
            <a className="no-decor" href="#article1">
              <span>Level 1 vs Level 2</span>
            </a>
          </li>
          <li className="list-group-item">
            <a className="no-decor" href="#article2">
              <span>New Features</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | ABOUT";
    setDidMount(true);
    console.log("The About component has updated.");
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The About component has updated.");
    }
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  return unmountMessage;
}
function unmountMessage() {
  console.log("The About component has unmounted.");
}
