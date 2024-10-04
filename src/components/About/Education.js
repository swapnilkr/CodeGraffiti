import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particles";
import Sapthagiri from '../../Assets/Sap.jpg'
import Divine from '../../Assets/divine.png'
import Joseph from '../../Assets/Joseph.png'


import { AiFillCar } from "react-icons/ai";


function Education() {

    const [isMobile, setIsMobile] = useState(window?.innerWidth < 780);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 780);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const educationList = [
        {
            id: 1,
            title: 'B.E. in CSE',
            company: 'Sapthagiri College of Engineering',
            description: `Cumulative Grade Point Average (CGPA): <span class="purple">8.97</span>/10.0 .
            Consistently ranked in the top 3% of the academic batch.`,
            imageUrl: Sapthagiri,
            endDate: 'Batch of 2022'
        },
        {
            id: 2,
            title: 'Intermediate College- CBSE',
            company: 'Divine Happy School',
            description: `Passed with 70.60%`,
            imageUrl: Divine,
            endDate: 'Batch of 2017'
        },
        {
            id: 3,
            title: 'Matriculation- ICSE',
            company: `St. Joseph's School`,
            description: `Passed with <span class="purple">93 %</span>.
            Awarded With best speaker of Batch.`,
            imageUrl: Joseph,
            startDate: 'Apr 2021',
            endDate: 'May 2021'
        },
    ]


    return (
        <Container fluid className="education-section">
            <Particle />
            <Row>
                <section id="experience" style={{ justifyContent: "center" }}>
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
                        <strong className="purple">Education</strong>
                    </h1>

                    {isMobile ?
                        <>
                            {educationList.map((key, index) => (
                                <div class="">
                                    <div class="short-dimension-timeline-box">
                                        <div class="timeline-logo">
                                            <img style={{ borderRadius: (index === 1 || index === 2 ? '20px' : '') }} src={key.imageUrl} />
                                        </div>
                                        <h3 class="experience-designation m0 m-blue"> &nbsp; &nbsp; &nbsp;
                                            {key.title}
                                        </h3>
                                        <h4 class="experience-company-name">
                                            {key.company}
                                        </h4>
                                        <h5 class="experience-duration m0">
                                            {key?.endDate}</h5>
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
                        </>
                        :
                        <div class="timeline">
                            {educationList.map((key, index) => (
                                <div class="timeline-box">
                                    <div class="timeline-conatiner">
                                        <div class="timeline-logo">
                                            <img style={{ borderRadius: (index === 1 || index === 2 ? '20px' : '') }} src={key.imageUrl} />
                                        </div>
                                        <h3 class="experience-designation m0 m-blue"> &nbsp; &nbsp; &nbsp;
                                            {key.title}
                                        </h3>
                                        <h4 class="experience-company-name">
                                            {key.company}
                                        </h4>
                                        <h5 class="experience-duration m0">
                                            {key?.endDate}</h5>
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
                                <div class="timeline-traveller car">
                                    <AiFillCar />
                                </div>
                            </div>
                        </div>
                    }


                </section>

            </Row>
        </Container>

    )

}

export default Education;
