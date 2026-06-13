import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";
import WeatherData from "./components/WeatherData/WeatherData";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const defaultCities = ["Riyadh","London",  "Tokyo", "New York"];

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
      );

      const data = await res.json();

      if (!data.main) return null;

      return {
        city: data.name,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        feelsLike: Math.round(data.main.feels_like),
        wind: Math.round(data.wind.speed),
        condition: data.weather[0].main,
      };
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  // 🔥 LOAD DEFAULT CITY ON START
  useEffect(() => {
    const loadDefault = async () => {
      const data = await fetchWeather(defaultCities[0]); // London
      if (data) setWeather(data);
    };

    loadDefault();
  }, []);

  const handleSearch = async (cityName) => {
    const data = await fetchWeather(cityName);
    if (!data) {
      alert("City not found!");
      return;
    }
    setWeather(data);
  };

  return (
    <>
      <Navbar />
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {weather && <WeatherData weather={weather} />}

      <About />
      <Footer />
    </>
  );
}

export default App;