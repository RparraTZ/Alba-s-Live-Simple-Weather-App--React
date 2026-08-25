import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("Ontario");
  const [searchCity, setSearchCity] = useState("Ontario");
  const [weatherData, setWeatherData] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    setSearchCity(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  useEffect(() => {
    async function fetchWeather() {
      const apiKey = "18o7a0b8f4af4db5fa386d3ft8f43fea";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchCity}&key=${apiKey}&units=imperial`;
      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fecthing data", error);
      }
    }
    fetchWeather();
  }, [searchCity]);
  return (
    <div className="App">
      <form className="mt-4 mb-3" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row g-1">
            <div className="col-9">
              <input
                type="text"
                onChange={updateCity}
                className="form-control"
                placeholder="Enter city..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-secondary w-100">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <Weather data={weatherData} />
      <Footer />
    </div>
  );
}
