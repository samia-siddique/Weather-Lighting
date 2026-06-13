import React from "react";
import assets from "../../assets/assets";
import "./Searchbar.css";

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div id="home" className="search-bar">
      <div className="input-text">
        <h2>
          WHAT'S THE <br></br> <span>WEATHER</span> <br></br> DOING TODAY?
        </h2>

        <p>
          TYPE A CITY. GET <span>CHAOS.</span>
        </p>
      </div>

      <div
        className="input-feild"
        style={{
          backgroundImage: `url(${assets.searchbar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(city);
            }
          }}
          type="text"
          placeholder="Enter City Name..."
        />
        <button onClick={() => onSearch(city)}>CHECK THE VIBES</button>
      </div>
    </div>
  );
};

export default SearchBar;
