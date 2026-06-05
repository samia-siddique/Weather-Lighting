import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ChaosDisplay from "./components/ChaosDisplay/ChaosDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = (cityName) => {
    const temp = Math.floor(Math.random() * 30) + 10;

    const data = {
      city: cityName,
      temp: temp,
    };

    setWeather(data);
  };
  return (
    <div>
      <h1>Weather Lighting</h1>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      <ChaosDisplay weather={weather} />
    </div>
  );
}

export default App;
