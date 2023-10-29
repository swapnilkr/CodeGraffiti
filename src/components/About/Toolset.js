import React, { useState, useEffect } from "react";
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
    const [isLogoVisible, setIsLogoVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsLogoVisible((prev) => !prev);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiVisualstudiocode className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">VS Code</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiJupyter className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Jupyter</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiPostman className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Postman</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <ImNpm className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">NPM</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <DiGulp className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Gulp</span>
                }
            </Col>
        </Row>
    );
}

export default Toolstack;
