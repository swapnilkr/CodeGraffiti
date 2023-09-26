import React from "react";
import Typewriter from "typewriter-effect";

function TechExp() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer@Motorola",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Turning Coffee into Code"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TechExp;
