import React from "react";
import "./Navbar.css";
import assets from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <div className="logo-row">
          <img src={assets.logo} alt="logo" />
          <h2>
            <span>BRICK</span>CAST
          </h2>
        </div>
        <p>Real Weather. Unhinged Forecasts.</p>
      </div>

      {/* LINKS */}
      <div className="nav-links">
        <ul>
          <li>
            Home <img src={assets.yellowlego} className="lego yellow" />
          </li>
          <li>
            About <img src={assets.greenlego} className="lego green" />
          </li>
          <li>
            Forecast <img src={assets.redlego} className=" lego red" />
          </li>
        </ul>
      </div>

      {/* BUTTON */}
      <button className="cta-btn">
        <img src={assets.legoblock} className="btn-lego" />
        Get the App
      </button>
    </div>
  );
};

export default Navbar;
