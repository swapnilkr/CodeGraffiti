import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeBottomComp() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              🌟 Embarking on a journey through the digital realm, I stumbled upon a love for crafting web wonders.
              <br />
              <br /> 💻 As a Software Engineer at&nbsp;
              <i>
                <b className="purple">Motorola Mobility</b>
              </i>
              , &nbsp;I've contributed to various projects. This includes- &nbsp;
              <br />
              ⚡
              <i>
                <b className="purple">Hello Shop</b>
              </i>
              , &nbsp;a Brazil-centric e-commerce platform based on React, JS, TS, VTEX & GraphQL
              ;
              <br />
              ⚡
              <i>
                <b className="purple">Hello You</b>
              </i>
              , &nbsp;a content delivery platform, based on React.js;
              <br />
              ⚡
              <i>
                <b className="purple">Moto Engage CRM</b>
              </i>
              , &nbsp;a personalized consumer engagement platform based on Angular, GCP.
              <br />
              These endeavors underline my proficiency in developing tailored solutions for diverse market segments.
              <br />
              <br />
              🌐 I unleash my coding creativity with the likes of&nbsp;
              <i>
                <b className="purple">React.js </b> and{" "}
                <b className="purple">
                  Next.js&nbsp;
                </b>
              </i>
              adding a dash of wizardry to the user's online odyssey. These are my paintbrushes for creating interactive and mesmerizing web applications.
              <br />
              <br />
              ✨ Let's embark on a magical journey together and conjure up web enchantments that leave a lasting impression.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:swapnilkr099@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/swapnilkr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/s_for_swapnil"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/swapnil-kumar-050337188/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s_for._.swapnil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeBottomComp;
