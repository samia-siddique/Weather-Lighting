import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ChaosDisplay from "./components/ChaosDisplay/ChaosDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  return (
    <div>
      <h1>Weather Lighting</h1>
      <SearchBar city={city} setCity={setCity} setWeather={setWeather} />

      <ChaosDisplay weather={weather} city={city} />
    </div>
  );
}

export default App;
