import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particles from "../Particles";
import Dhun from '../../Assets/Projects/Dhun.JPG';
import LosslessCompression from '../../Assets/Projects/Lossless-text-compression.jpg';
import Netflix from '../../Assets/Projects/Netflix.JPG';
import NetNexus from '../../Assets/Projects/NetNexus.JPG';
import Pockket from '../../Assets/Projects/Pockket.JPG';
import SentimentAnalysis from '../../Assets/Projects/Sentiment-analysis.jpg';
import DhunVideo from '../../Assets/Projects/Dhun.mp4';
import NetflixVideo from '../../Assets/Projects/Netflix.mp4';
import NetNexusVideo from '../../Assets/Projects/NetNexus.mp4';


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particles />
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
              imgPath={Dhun}
              isBlog={false}
              title="Dhun"
              description={`Web-based audio music player developed using <span class="purple">Next.js & Tailwind CSS </span>. It includes authentication features using <span class="purple">nextAuth, GoogleOAuth</span> and mongoose and provides users with the ability to store and manage their recent and favorite songs.`}
              ghLink="https://github.com/swapnilkr/DHUN-Music-Player-V2"
              demoLink="https://dhun-lyart.vercel.app/"
              videoPath={DhunVideo}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetNexus}
              isBlog={false}
              title="NetNexus"
              description={`Full-stack social media website developed using the <span class="purple">MEN</span> stack. Provides users with features like social interaction like posting, liking, commenting, and real-time chat functionality using WebSockets. The platform integrates Google OAuth for secure user authentication.`}
              ghLink="https://github.com/swapnilkr/NetNexus"
              videoPath={NetNexusVideo}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix"
              description={`Netflix clone developed using the <span class="purple">MERN</span> stack. It provides a platform for users to browse movies and TV shows, register an account, and enjoy streaming services akin to Netflix.`}
              ghLink="https://github.com/swapnilkr/Netflix"
              videoPath={NetflixVideo}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pockket}
              isBlog={false}
              title="Pockket"
              description={`Dynamic and responsive payment gateway named "Pockket" using <span class="purple">MEN</span> stack. The payment gateway offers users a seamless and secure experience in managing transactions online;Including authentication features using <span class="purple">Passport, GoogleOAuth</span>.`}
              ghLink="https://github.com/swapnilkr/Pockket"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LosslessCompression}
              isBlog={false}
              title="Lossless Text Compression"
              description={`Lossless text compression solution leveraging the Huffman coding algorithm;Achieved reduction of file size by <span class="purple">50%</span>. Used various data structures including hashmaps, trees, priority queues in Python.`}
              ghLink="https://github.com/swapnilkr/Lossless-Text-Compression"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SentimentAnalysis}
              isBlog={false}
              title="Sentiment Analysis"
              description="Aims to automate the detection of different sentiments from textual comments and feedback.To infer the sentiment used two classifiers: logistic regression and multinomial naive Bayes,tuned the hyperparameters of both classifiers with grid search; Achieving accuracy of 0.80."
              ghLink="https://github.com/swapnilkr/Sentiment_Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
