import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jayesh Chavda </span>
            from <span className="purple"> Bhavnagar, Gujarat, India.</span>
            <br />
            I am currently employed as a software developer at Ashirwad Infotech.
            <br />
            I have completed MCA at Department of Computer Science in Maharaja Krishnakumarsinhji Bhavnagar University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jayesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
