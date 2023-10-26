import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particles";
import Moto from '../../Assets/moto.png'
import Sparks from '../../Assets/Sparks.png'

function Experience() {

  const experienceList = [
    {
      id: 1,
      title: 'Associate Software Developer',
      company: 'Motorola Mobility - Lenovo',
      description: `Re-engineered legacy third-party software system, yielding annual savings of <span class="purple">320K</span> INR.
      Managed successful launches to <span class="purple">11 million</span> devices.
      Standardized design elements across <span class="purple">623 UI </span> screens.
      Pioneered Google <span class="purple">Dialogflow-powered Giftbot</span> enabling frictionless purchases.
      Attained <span class="purple">50%</span> reduction in menu page load times.
      Deployed dynamic user segmentation banner for precise promotions and surveys.
      Implemented <span class="purple">cloud-based dialog</span> interface for streamlined push notifications.`,
      imageUrl: Moto,
      startDate: 'Aug 2023',
      endDate: 'Present'
    },
    {
      id: 2,
      title: 'Intern',
      company: 'Sparks Foundation',
      description: `Created "Pockket," a dynamic Node.js-based payment gateway with MongoDB integration.
      Implemented Passport for local and Google OAuth2 for user authentication and authorization.
      Utilized MessageBird API for OTP verification.`,
      imageUrl: Sparks,
      startDate: 'July 2021',
      endDate: 'Aug 2021'
    },
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'ABC Tech',
      description: 'Worked on creating user-friendly and responsive web applications using React, HTML, CSS, and JavaScript.',
      imageUrl: 'experience1.jpg',
      startDate: 'idk',
      endDate: 'idk'
    },
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'ABC Tech',
      description: 'Worked on creating user-friendly and responsive web applications using React, HTML, CSS, and JavaScript.',
      imageUrl: 'experience1.jpg',
      startDate: 'idk',
      endDate: 'idk'
    },
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'ABC Tech',
      description: 'Worked on creating user-friendly and responsive web applications using React, HTML, CSS, and JavaScript.',
      imageUrl: 'experience1.jpg',
      startDate: 'idk',
      endDate: 'idk'
    },
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'ABC Tech',
      description: 'Worked on creating user-friendly and responsive web applications using React, HTML, CSS, and JavaScript.',
      imageUrl: 'experience1.jpg',
      startDate: 'idk',
      endDate: 'idk'
    },
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'ABC Tech',
      description: 'Worked on creating user-friendly and responsive web applications using React, HTML, CSS, and JavaScript.',
      imageUrl: 'experience1.jpg',
      startDate: 'idk',
      endDate: 'idk'
    }
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
                    <img style={{ borderRadius: (key?.company === "Sparks Foundation" ? '20px' : '') }} src={key.imageUrl} />
                  </div>
                  <h3 class="experience-designation m0 m-blue"> &nbsp; &nbsp; &nbsp;
                    {key.title}
                  </h3>
                  <h4 class="experience-company-name">
                    {key.company}
                  </h4>
                  <h5 class="experience-duration m0">
                    {key?.startDate} - {key?.endDate}</h5>
                  <ul class="experience-description text-align-justify">
                    {key.description.split('\n').map((point, i) => (
                      <li key={i}>
                        <span dangerouslySetInnerHTML={{ __html: point }} />
                      </li>
                    ))}
                  </ul>
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
