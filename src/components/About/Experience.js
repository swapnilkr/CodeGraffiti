import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particles";


const Experience = () => {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Row>
        <section id="experience" style={{justifyContent: "center"}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
               <strong className="purple">Experience</strong>
            </h1>

          <div class="timeline">
            <div class="timeline-box">
              <div class="timeline-conatiner">
                <div class="timeline-logo">
                  <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                </div>
                <h3 class="experience-designation m0 m-blue"> &nbsp; &nbsp; &nbsp;Head Co-ordinator </h3>
                <h4 class="experience-company-name">College Event</h4>
                <h5 class="experience-duration m0">
                  Aug 2019 </h5>
                <p class="experience-description text-align-justify">
                  Head Co-ordinator, Lakshya Event: Science Project & Model Making – Led 5 coordinators & managed 45+ volunteers for smooth functioning of 3-day long event.
                </p>
              </div>
            </div>
            <div class="timeline-box right">
              <div class="timeline-conatiner">
                <div class="timeline-logo">
                  <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                </div>
                <h3 class="experience-designation m0 m-blue"> Class Representative </h3>
                <h4 class="experience-company-name">Dept. Of Computer Engineering</h4>
                <h5 class="experience-duration m0">
                  Aug 2018 - Present </h5>
                <p class="experience-description text-align-justify">
                  Unanimously elected to led & represent the batch of 120 students in the department
                  Attend various General Body Meetings to lay grievances of students
                </p>
              </div>
            </div>


            <div class="timeline-box left">
              <div class="timeline-conatiner">
                <div class="timeline-logo">
                  <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                </div>
                <h3 class="experience-designation m0 m-blue"> &nbsp; &nbsp; &nbsp; Virtual Experience </h3>
                <h4 class="experience-company-name">Microsoft</h4>
                <h5 class="experience-duration m0">
                  July 2020 </h5>
                <p class="experience-description text-align-justify">
                  Completed 6 modules on various skillsets like Virtual Experience , Business Foundation skill , Campus to Corporate : Work Ready skill and Technical Engineer Skills.
                </p>
              </div>
            </div>

            <div class="timeline-box right">
              <div class="timeline-conatiner">
                <div class="timeline-logo">
                  <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                </div>
                <h3 class="experience-designation m0 m-blue">&nbsp; &nbsp; &nbsp; Virtual  Experience </h3>
                <h4 class="experience-company-name">JPMorgan Chase & co.</h4>
                <h5 class="experience-duration m0">
                  June 2020 - Jul 2020 </h5>
                <p class="experience-description text-align-justify">
                  Establishing Financial Data Feed – Fixed broken datafeed script, created automated time-interval generated data & developed git patch.
                </p>
              </div>
            </div>

            <div class="timeline-box left">
              <div class="timeline-conatiner">
                <div class="timeline-logo">
                  <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                </div>
                <h3 class="experience-designation m0 m-blue"> Internship </h3>
                <h4 class="experience-company-name">Internship-Studio</h4>
                <h5 class="experience-duration m0">
                  Aug 2020 - present</h5>
                <p class="experience-description text-align-justify">
                  Machine Learning Based project.
                </p>
              </div>
            </div>

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
