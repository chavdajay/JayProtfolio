import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiBootstrap,
  DiGithub,
  DiMysql,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiSupabase,
  SiAdobexd,
  SiAirtable,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
          <DiBootstrap />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://supabase.io/" target="_blank" rel="noopener noreferrer">
          <SiSupabase />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <DiMysql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <DiGithub />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer">
          <SiAdobexd />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://airtable.com/" target="_blank" rel="noopener noreferrer">
          <SiAirtable />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">
          <SiHeroku />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <SiVercel />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
