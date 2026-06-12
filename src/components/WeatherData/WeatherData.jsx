import React from "react";
import "./WeatherData.css";

const WeatherData = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <div className="weather-container">
        <div className="weather-left">
          <h2>{weather.city}</h2>

          <div className="weather-scene">
            <img src={weather.icon} alt="" />
          </div>
        </div>

        <div className="weather-center">
          <h1>{weather.temp}°C</h1>
          <p>{weather.condition}</p>

          <h3 className="mood">
            {weather.temp > 30
              ? "OVERDRAMATIC"
              : weather.temp < 15
                ? "FROZEN CHAOS"
                : "MILD PANIC"}
          </h3>

          <p className="chaos-text">
            {weather.temp > 35
              ? "You are being slow-cooked."
              : weather.temp > 28
                ? "Basically a hug from an oven."
                : weather.temp < 10
                  ? "Penguin approved weather."
                  : "The weather is behaving... suspiciously."}
          </p>
        </div>

        <div className="weather-right">
          <div className="stat">
            <h4>Humidity</h4>
            <p>{weather.humidity}%</p>
          </div>

          <div className="stat">
            <h4>Wind</h4>
            <p>{weather.wind} km/h</p>
          </div>

          <div className="stat">
            <h4>Feels Like</h4>
            <p>{weather.feelsLike}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
