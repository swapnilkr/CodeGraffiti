import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return (
        <Particles options={{
            particles: {
                color: {
                    value: "#fff"
                },
                number: {
                    value: 50
                },
                opacity: {
                    value: { min: 0.3, max: 1 }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: { min: 1, max: 5 }
                },
                move: {
                    direction: "bottom-right",
                    enable: true,
                    speed: { min: 0.5, max: 2 },
                    straight: true
                }
            },

            interactivity: {
                events: {
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    push: {
                        particles_nb: 1,
                    },
                },
            },
            retina_detect: true,
        }}
        />
    );
}

export default Particle;
