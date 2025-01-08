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
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAirtable />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      
    </Row>
  );
}

export default Techstack;
