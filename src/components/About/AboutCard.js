import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Smriti Agarwal </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I am a final-year B.Tech student at Bennett University, specializing in full-stack development, with experience in building dynamic web applications.
            <br />
            <br />
            Apart from development, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Code testing – I enjoy structured testing and debugging.
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore new technologies and frameworks.
            </li>
            <li className="about-activity">
              <ImPointRight /> Animation - how cool is that!
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
