import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
    const [expand, setExpand] = useState(false);
    const [navColour, setNavColour] = useState(false);

    const [dropdownExpand, setDropdownExpand] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    }

    window.addEventListener("scroll", scrollHandler, true);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Nav.Link as={Link} to="/" className="d-flex">
                    <div className="img img-fluid logo" alt="brand">
                        Sn.
                    </div>
                </Nav.Link>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        setExpand(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <NavDropdown
                            title={
                                <div>
                                    <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                                    About
                                </div>
                            }
                            show={dropdownExpand}
                            onClick={() => setDropdownExpand(!dropdownExpand)}
                            // onBlur={() => setDropdownExpand(!dropdownExpand)}
                            // onMouseEnter={() => setDropdownExpand(true)}
                            // onMouseLeave={() => setDropdownExpand(false)}
                        >
                            <Nav.Link as={Link} to="/whoiam" onClick={() => setExpand(false)}>
                                Who i am
                            </Nav.Link>
                            <Nav.Link as={Link} to="/experience" onClick={() => setExpand(false)}>
                                Experience
                            </Nav.Link>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => setExpand(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => setExpand(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} />{" "}
                                Resume
                            </Nav.Link>
                        </Nav.Item>


                        <Nav.Item className="fork-btn github-svg">
                            <Button
                                href="https://github.com/swapnilkr/CodeGraffiti"
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                                <AiFillStar style={{ fontSize: "1.1em" }} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
