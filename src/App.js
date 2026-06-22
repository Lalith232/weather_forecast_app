import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import { fetchWeather, fetchForecast } from "./api"; // Import API functions
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

 const handleSearch = async (city) => {
  try {
    const weatherData = await fetchWeather(city);
    setWeather(weatherData);

    const forecastData = await fetchForecast(city);

    // Filter for entries around 12:00:00 (midday)
    const middayForecasts = forecastData.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );

    // Limit to 5 days
    setForecast(middayForecasts.slice(0, 5));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


  return (
    <div className="app">
      <h1>🌦 Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <ForecastList forecast={forecast} />}
    </div>
  );
}

export default App;
