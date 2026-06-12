import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";
import WeatherData from "./components/WeatherData/WeatherData";
import assets from "./assets/assets";

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

      let weatherImage;

      if (data.weather[0].main === "Clear") {
        weatherImage = assets.sun;
      } else if (data.weather[0].main === "Rain") {
        weatherImage = assets.rain;
      } else if (data.weather[0].main === "Clouds") {
        weatherImage = assets.cloud;
      } else {
        weatherImage = assets.cloudysun;
      }

      const weatherData = {
        city: data.name,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        feelsLike: Math.round(data.main.feels_like),
        wind: Math.round(data.wind.speed),
        condition: data.weather[0].main,
        icon: weatherImage,
      };

      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  console.log(import.meta.env.VITE_WEATHER_API_KEY);

  return (
    <>
      <Navbar />
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      {weather && <WeatherData weather={weather} />}
    </>
  );
}

export default App;
