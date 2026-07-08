import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { formatWeatherData } from "./weatherHelpers";

export default function Weather(props) {
  if (!props.data) {
    return <p>Loading weather data...</p>;
  }

  // This creates your 'weather' object package!
  const weather = formatWeatherData(props.data);

  return (
    // Dynamic background class injected perfectly!
    <div className={`Weather ${weather.themeClass}`}>
      {/* Every variable below must read from your 'weather' object */}
      <h3 className="text-center fw-bold">{weather.cityName}</h3>
      <div className="fs-6 text-center">{weather.displayDate}</div>
      <div className="current-date text-center">{weather.displayTime}</div>

      <div className="container weather-display m-3">
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
              <li className="fw-bold temp-f">{weather.temperature}°F</li>
              <li className="fs-3 text-muted">{weather.celTemp}°C</li>
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
    </div>
  );
}
