import React from "react";
import "./Navbar.css";
import assets from "../../assets/assets";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        backgroundImage: `url(${assets.navbar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
          <li  onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
            Home <img src={assets.yellowlego} className="lego yellow" />
          </li>
          <li onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
            About <img src={assets.greenlego} className="lego green" />
          </li>
          <li onClick={() => document.getElementById("credits").scrollIntoView({ behavior: "smooth" })}>
            Credits <img src={assets.redlego} className=" lego red" />
          </li>
        </ul>
      </div>

      {/* BUTTON */}
      <button className="cta-btn">
        <img src={assets.legoblock} className="btn-lego" />
       Check the Weather
      </button>
    </div>
  );
};

export default Navbar;
