import React from "react";

function Preloader(props) {
  return (
    <div id={props?.startup ? "startup" : "startup-none"}>
      <div id="startup-text-container">
        <div id="startup-inner-text-container">
          <h1>
            Console
            <span style={{ color: "white" }}>
              .
              <span style={{ color: "#61afef" }}>
                log
              </span>
            </span>
            ("
          </h1>
          <div class="text-block">
            <h1 class="greeting en">
              Hello World!
            </h1>
            <h1 class="greeting de">
              HTTP 200: Liftoff!
            </h1>
            <h1 class="greeting it">
              Skadoosh!
            </h1>
          </div>
          <h1 class="closure">")
            ;
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
