import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Swapnil </span>
                        from <span className="purple"> Bhagalpur, India.</span>
                        <br /> I'm currently immersed in an exciting marketplace project at 
                        <i>
                            <b className="purple">{" "}
                                Motorola Mobility
                            </b>
                        </i>. Our tech stack includes
                        <i>
                            <b className="purple">
                                React, JS, TS, VTEX, Rest API & GraphQL
                            </b>
                        </i>.
                        <br />
                        I hold a Bachelor of Engineering (B.E.) degree from Sapthagiri College of Engineering (Class of 2022) with a CGPA of 
                        <i>
                            <b className="purple"> 8.97
                            </b>
                        </i>.
                        <br />
                        <br />
                        <h5 style={{textAlign: "center"}}>Achievements</h5>
                        <ul>
                            <li><span className="purple">3-star</span> CodeChef programmer.</li>
                            <li>Ranked <span className="purple">#50</span> in Dare2Complete Online Hackathon Festival (OHF) by IIIT Delhi.</li>
                            <li>Achieved an all-time best global ranking of <span className="purple">#289</span> in HackerBlocks.</li>
                            <li><span className="purple">2nd</span> runner-up in a SCE Hackathon.</li>
                            <li>Ranked <span className="purple">#521</span> (out of 30,000) in an event by Coding Ninjas.</li>
                        </ul>
                    </p>
                    <h5 style={{textAlign: "center"}}>Hobby</h5>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Bike Long Drives
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Exploring Destinations
                        </li>
                    </ul>

                    {/* <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Soumyajit</footer> */}
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
