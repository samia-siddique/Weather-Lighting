import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ChaosDisplay from "./components/ChaosDisplay/ChaosDisplay";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
      );

      const data = await response.json();

      if (!data.main) {
        alert("City not found!");
        return null;
      }

      const weatherData = {
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].main,
      };

      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  console.log(import.meta.env.VITE_WEATHER_API_KEY);

  return (
    <div>
      <Navbar />
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      <ChaosDisplay weather={weather} />
    </div>
  );
}

export default App;
