import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiJupyter
} from "react-icons/si";
import {
    ImNpm
} from "react-icons/im";

import {
    DiGulp
} from "react-icons/di";


function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJupyter />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <ImNpm />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGulp />
            </Col>
        </Row>
    );
}

export default Toolstack;
