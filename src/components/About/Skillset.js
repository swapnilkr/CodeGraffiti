import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiAws,
    DiGulp
} from "react-icons/di";
import {
    BiLogoSass
} from "react-icons/bi";
import {
    SiRedis,
    SiNginx,
    SiTypescript,
    SiGraphql,
    SiVtex
} from "react-icons/si";

function Skillset() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                {/* <span className="tech-name">React</span> */}
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVtex />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGraphql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNginx />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoSass />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
            </Col>
        </Row>
    );
}

export default Skillset;
