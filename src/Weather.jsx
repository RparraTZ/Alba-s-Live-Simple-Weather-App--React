import React, { useState } from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { formatWeatherData } from "./weatherHelpers";
import ForecastData from "./ForecastData";

export default function Weather(props) {
  const [unit, setUnit] = useState("fahrenheit");
  if (!props.data) {
    return <p>Loading weather data...</p>;
  }

  const weather = formatWeatherData(props.data);
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  return (
    <div className={`Weather ${weather.themeClass}`}>
      <h3 className="text-center fw-bold">{weather.cityName}</h3>
      <div className="fs-6 text-center">{weather.displayDate}</div>
      <div className="current-date text-center">{weather.displayTime}</div>

      <div className="container weather-display m-1">
        <div className="row">
          <div className="col-6 text-center">
            <img
              className="weather-icon"
              src={weather.weatherIcon}
              alt={weather.description}
            />
          </div>
          <div className="col-6 mt-4 quick-info d-flex justify-content-md-center">
            <ul>
              <div className="temp-and-unit mt-3">
                {unit === "fahrenheit" ? (
                  <>
                    <div className="fw-bold temp-f">{weather.temperature}</div>
                    <div className="mt-3">
                      <span className="temp-unit active-unit">°F | </span>

                      <a className="temp-unit" href="/" onClick={showCelsius}>
                        °C
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="fw-bold temp-f">{weather.celTemp}</div>
                    <div className="mt-3">
                      <a
                        className="temp-unit"
                        href="/"
                        onClick={showFahrenheit}
                      >
                        °F
                      </a>

                      <span className="temp-unit active-unit"> | °C</span>
                    </div>
                  </>
                )}
              </div>
              <li className="description text-capitalize">
                {weather.description}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="condition-display mt-4 d-flex justify-content-around">
        <div className="boxes text-center">
          <FontAwesomeIcon icon={faDroplet} />
          <div>Humidity</div>
          <div>
            <strong>{weather.humidity}%</strong>
          </div>
        </div>
        <div className="boxes text-center">
          <FontAwesomeIcon icon={faWind} />
          <div>Wind</div>
          <div>
            <strong>{weather.windSpeed} mph</strong>
          </div>
        </div>
      </div>
      <ForecastData city={weather.cityName} />
    </div>
  );
}
