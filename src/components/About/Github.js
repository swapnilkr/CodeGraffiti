import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="swapnilkr"
        blockSize={15}
        blockMargin={5}
        year='last'
        colorScheme='dark'
        theme = {{
          dark : [
            "hsl(0, 0%, 92%)",
            "hsla(272, 85%, 74%, 0.44)",
            "hsla(272, 85%, 74%, 0.6)",
            "hsla(272, 85%, 74%, 0.76)",
            "hsla(272, 85%, 74%, 0.92)"
            ]
        }}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
