import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-text">
        <h2>What is <span>Brick</span>Cast?</h2>

        <p>
          Brickcast doesn’t just show weather,it judges it. Every forecast comes
          with emotional commentary, because temperature alone is boring.
        </p>

         <div className="system-msg">
          SYSTEM: Weather personality engine unstable... but functioning.
        </div>
      </div>

      <div className="features">
        <div>⚡ Real-time weather API</div>
        <div>😂 Emotional weather commentary</div>
        <div>🌦 Mood-based weather interpretation</div>
        <div>🧠 Human-like weather personality system</div>
        <div>📍 Live city search worldwide</div>
        <div>🎮 Game-like UI experience</div>
      </div>
    </div>
  );
};

export default About;
