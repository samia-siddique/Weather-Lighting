import "./ChaosDisplay.css";

const ChaosDisplay = ({ weather }) => {
  if (!weather) {
    return (
      <div className="chaos-display">
        <h1>Enter a city to start chaos 🌪️</h1>
      </div>
    );
  }

  return (
    <div className="chaos-display">
      <h1>Chaotic Weather 🌪️</h1>

      <h2>{weather.city}</h2>
      <h3>{weather.temp}°C</h3>

      <p>
        {weather.temp > 30
          ? "You are being roasted by the sun ☀️"
          : "Mild chaos detected 🌧️"}
      </p>
    </div>
  );
};

export default ChaosDisplay;
