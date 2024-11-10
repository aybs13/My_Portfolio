import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I’m <span className="purple">Ayub Rantesalu</span> from <span className="purple">North Toraja, Indonesia</span>.
            <br />I’m a <span className="purple">Full-Stack Web Developer</span>, <span className="purple">Cybersecurity Enthusiast</span>, and <span className="purple">Web3 Explorer</span>.
            <br />
            <br />
            Besides coding, here are a few other things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Innovation starts with one line of code."
          </p>
          <footer className="blockquote-footer">Ayub Rantesalu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
