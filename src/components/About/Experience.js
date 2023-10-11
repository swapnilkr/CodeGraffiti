import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particles";


function Experience() {

  const experienceList = [
    {
      id: 1,
      title: 'Associate Software Developer',
      company: 'Motorola Mobility - Lenovo',
      description: 'Re-engineered a legacy third-party software system, introducing a custom user grievance reporting flow.
      Engineered a dynamic cloud-based user segmentation framework for personalized engagement.
      Pioneered the development of a Google Dialogflow-powered Gitbot, enabling frictionless purchases.
      Spearheaded a 50% reduction in menu page load times.
      Orchestrated the deployment of an adaptive user segmentation banner for targeted promotions and surveys.
      Standardized and harmonized design elements across an extensive portfolio of 623 UI screens.
      Seamlessly delivered beta, soft, and prod launches to 11 million devices.
      Orchestrated the implementation of a cloud-delivered dialog interface for sophisticated push notifications.',
      imageUrl: 'experience1.jpg', // Replace with your image URL
      startDate: 'idk',
      endDate: 'idk'
    },
    {
      id: 1,
      title: 'sd;lkl;sd',
      company: 'ABC Tech',
      description: 'Worked on creating user-friendly and responsive web applications using React, HTML, CSS, and JavaScript.',
      imageUrl: 'experience1.jpg', // Replace with your image URL
      startDate: 'idk',
      endDate: 'idk'
    },
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'ABC Tech',
      description: 'Worked on creating user-friendly and responsive web applications using React, HTML, CSS, and JavaScript.',
      imageUrl: 'experience1.jpg', // Replace with your image URL
      startDate: 'idk',
      endDate: 'idk'
    },

  ]

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Row>
        <section id="experience" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
            <strong className="purple">Experience</strong>
          </h1>

          <div class="timeline">
            {experienceList.map((key, index) => (
              <div class="timeline-box">
                <div class="timeline-conatiner">
                  <div class="timeline-logo">
                    <img src={key.imageUrl} />
                  </div>
                  <h3 class="experience-designation m0 m-blue"> &nbsp; &nbsp; &nbsp;
                    {key.title}
                  </h3>
                  <h4 class="experience-company-name">
                    {key.company}
                  </h4>
                  <h5 class="experience-duration m0">
                    {key?.startDate} - {key?.endDate}</h5>
                  <p class="experience-description text-align-justify">
                    {key?.description}
                  </p>
                </div>
              </div>
            ))}
            <div class="timeline-divider plane">
              <div class="timeline-traveller">
                <i class="fas fa-plane"></i>
              </div>
            </div>
          </div>
        </section>

      </Row>
    </Container>
  )

}

export default Experience;
