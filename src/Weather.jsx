import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrella,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  return (
    <div className="Weather">
      <h3 className="text-center fw-bold">Los Angeles</h3>
      <div className="fs-6">Monday 11:33 PM</div>
      <div className="container weather-display m-3 ">
        <div className="row">
          <div className="col-6">
            <img
              className="weather-icon"
              src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg"
              alt="sunny"
            />
          </div>
          <div className="col-6 mt-4 quick-info d-flex justify-content-md-center">
            <ul>
              <li className="fw-bold temp-f">85°F</li>
              <li className="fs-2">27°C</li>
              <li className="description">Partly Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="condition-display mt-4">
        <div className="boxes">
          <FontAwesomeIcon icon={faUmbrella} />
          <div>Precipitation </div>
          <div>
            <strong>90%</strong>
          </div>
        </div>
        <div className="boxes">
          <FontAwesomeIcon icon={faDroplet} />
          <div>Humidity </div>
          <div>
            <strong>90%</strong>
          </div>
        </div>
        <div className="boxes">
          <FontAwesomeIcon icon={faWind} />
          <div>Wind</div>
          <div>
            <strong>10 mph</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
