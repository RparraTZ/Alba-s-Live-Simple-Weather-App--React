import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h4 className="city-name">Los Angeles</h4>
      <div className="container weather-display">
        <div className="row d-flex justify-content-evenly">
          <div className="col-sm-6 p-0">
            <ul className="p-0">
              <li>Wednesday 11:33 PM</li>
              <li>Rainy</li>
              <li>⛈️51°C</li>
            </ul>
          </div>
          <div className="col-sm-6 p-0">
            <ul className="p-0">
              <li>Precipitation: 75%</li>
              <li>Humidity: 90% </li>
              <li>Wind: 10 mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
