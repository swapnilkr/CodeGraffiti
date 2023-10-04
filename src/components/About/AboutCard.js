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
                        <h5>Achievements</h5>
                        <ul>
                            <li>3-star CodeChef programmer.</li>
                            <li>Ranked #50 in Dare2Complete Online Hackathon Festival (OHF) by IIIT Delhi.</li>
                            <li>Achieved an all-time best global ranking of #289 in HackerBlocks.</li>
                            <li>Second runner-up in a SCE Hackathon.</li>
                            <li>Ranked #521 (out of 30,000) in an event by Coding Ninjas.</li>
                        </ul>
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
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
