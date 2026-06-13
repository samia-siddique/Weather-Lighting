import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="credits">
      <div className="footer-logo"><span>BRICK</span>CAST</div>

      <p className="footer-tagline">Real Weather. Unhinged Forecasts.</p>

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-card">
            <h4>⚙️ Powered By</h4>
            <p>React + OpenWeather API + Pure Chaos.</p>
          </div>

          <div className="footer-card">
            <h4>🌩 Current Status</h4>
            <p>Weather Personality Engine: Emotionally Available.</p>
          </div>

          <div className="footer-card">
            <h4>🧠 Scientific Accuracy</h4>
            <p>Somewhere between NASA and a potato.</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-terminal warning-box">
            <h4>⚠️ Warning</h4>
            <p>This app may emotionally judge your local climate.</p>
          </div>

          <div className="footer-terminal">
            <p> Initializing weather sarcasm...</p>
            <p> Clouds successfully insulted.</p>
            <p> Forecast confidence: questionable.</p>
            <p> System running normally.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made for Stack • Built with questionable meteorology</p>
      </div>
    </div>
  );
};

export default Footer;
