import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSupabase,
  SiVercel,
  SiAirtable,
  SiOpenai
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="tech-link">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="tech-link">
          <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://supabase.io/" target="_blank" rel="noopener noreferrer" className="tech-link">
          <SiSupabase />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="tech-link">
          <SiVercel />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://airtable.com/" target="_blank" rel="noopener noreferrer" className="tech-link">
          <SiAirtable />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://openai.com/" target="_blank" rel="noopener noreferrer" className="tech-link">
          <SiOpenai />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
