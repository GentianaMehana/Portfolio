import React, { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { opacity: 0 },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
        particles: {
          color: { value: "#8b5cf6" },
          links: { 
            color: "#8b5cf6", 
            distance: 150, 
            enable: true, 
            opacity: 0.3, 
            width: 1 
          },
          move: { 
            enable: true, 
            speed: 2, 
            direction: "none", 
            random: false, 
            straight: false 
          },
          number: { 
            density: { enable: true, area: 800 }, 
            value: 80 
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-20"
    />
  );
};

export default ParticleBackground;