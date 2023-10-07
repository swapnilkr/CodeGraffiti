import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particles";
import Github from "./Github";
import Skillset from "./Skillset";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolset from "./Toolset";

function Whoiam() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "center"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" style={{textAlign: "center"}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Skillset />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolset />

        <Github />
      </Container>
    </Container>
  );
}

export default Whoiam;
