import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left-bar">
        {" "}
        <img src="" alt="logo" />
        <h3>
          <span>BRICK</span>CAST
        </h3>
        <p>Real Weather. Unhinged Forecasts.</p>
      </div>

      <div className="middle-bar">
        <ul>
          <li>
            Home <img src="" />
          </li>
          <li>
            About <img src="" />
          </li>
          <li>
            Forecast <img src="" />
          </li>
        </ul>
      </div>

      <div className="right-bar">
        <button>Get the App</button>
      </div>
    </div>
  );
};

export default Navbar;
