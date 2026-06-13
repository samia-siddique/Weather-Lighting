import React from "react";
import "./WeatherData.css";
import assets from "../../assets/assets";

const WeatherData = ({ weather }) => {
  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const condition = weather?.condition?.toLowerCase() || "";

  let moodText;
  let moodIcon;

  if (condition.includes("thunderstorm")) {
    moodText = "The sky is leaking again.";
    moodIcon = assets.rainyicon;
  } else if (condition.includes("thunder")) {
    moodText = "The clouds chose violence today.";
    moodIcon = assets.rainyicon;
  } else if (weather.temp > 35) {
    moodText = "Basically a hug from an oven.";
    moodIcon = assets.sunnyicon;
  } else if (weather.temp > 28) {
    moodText = "The sun has personal issues today.";
    moodIcon = assets.sunnyicon;
  } else if (weather.temp < 10) {
    moodText = "Penguin approved weather.";
    moodIcon = assets.wintericon;
  } else {
    moodText = "The weather is behaving... suspiciously.";
    moodIcon = assets.cloudyicon;
  }

  return (
    <div className="weather-container">
      <div className="weather-left">
        <h2>{weather.city}</h2>

        <div className="date-time">
          <p>{date}</p>
          <p>{time}</p>
        </div>

        <div className="weather-scene">
          <img src={moodIcon} alt="" />
        </div>
      </div>

      <div className="weather-center">
        <h1>{weather.temp}°C</h1>
        <p>{weather.condition}</p>

        <h3 className="mood">
          {weather.temp > 30
            ? "MOOD: OVERDRAMATIC"
            : weather.temp < 15
            ? "MOOD: FROZEN CHAOS"
            : "MOOD: MILD PANIC"}
        </h3>

        <p className="chaos-text">
          <img src={moodIcon} className="chaos-icon" />
          {moodText}
        </p>
      </div>

      <div className="weather-right">
        <div className="stat">
          <img src={assets.humidity} />
          <div>
            <h4>Humidity</h4>
            <p>{weather.humidity}%</p>
          </div>
        </div>

        <div className="stat">
          <img src={assets.feelslike} />
          <div>
            <h4>Wind</h4>
            <p>{weather.wind} km/h</p>
          </div>
        </div>

        <div className="stat">
          <img src={assets.temp} />
          <div>
            <h4>Feels Like</h4>
            <p>{weather.feelsLike}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;