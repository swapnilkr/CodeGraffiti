import React, { useState, useEffect } from "react";
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
import { TbBrandNextjs } from "react-icons/tb";
import {
    SiRedis,
    SiNginx,
    SiTypescript,
    SiGraphql,
    SiVtex,
    SiTailwindcss
} from "react-icons/si";

function Skillset() {
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
            <Col xs={4} md={2} className={`tech-icons`}>
                {isLogoVisible ?
                    <DiReact className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">React</span>
                }

            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <TbBrandNextjs className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Next .js</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <DiJavascript1 className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">JS</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiVtex className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Vtex</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiGraphql className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">GraphQL</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiTailwindcss className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Next .js</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <DiNodejs className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Node. js</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <DiGit className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Git</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiTypescript className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">TS</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <DiMongodb className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">MongoDb</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiRedis className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Redis</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <SiNginx className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Nginx</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <DiAws className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">AWS</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <DiPython className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Python</span>
                }
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                {isLogoVisible ?
                    <BiLogoSass className="skillset-logo fadeinoutLogo" />
                    :
                    <span className="tech-name fadeinoutName">Sass</span>
                }
            </Col>
        </Row>
    );
}

export default Skillset;
