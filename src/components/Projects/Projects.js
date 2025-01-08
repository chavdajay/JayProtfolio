import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Book Management System"
              description="The Book Management System is a web-based application built to manage books efficiently. It enables users to perform CRUD (Create, Read, Update, Delete) operations for books and offers features to streamline the organization and tracking of a library's inventory. This system is ideal for libraries, bookstores, or individuals managing large collections of books."
              ghLink="https://github.com/chavdajay/book-management-system"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="OpenAI Chatgpt"
              description="This project integrates OpenAI's ChatGPT-4 model into a web application to provide advanced conversational AI capabilities. It can be used for various use cases such as customer support, education, content creation, or any scenario requiring intelligent, human-like interaction. The application leverages the ChatGPT-4 API for real-time communication with users."
              ghLink="https://github.com/chavdajay/OpenAI"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mern with MySql"
              description="React, Node.js, and MySQL work together seamlessly to create robust, full-stack web applications. Here’s a breakdown of their roles and how they interact:"
              ghLink="https://github.com/chavdajay/mern_mysql"
              demoLink="/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
