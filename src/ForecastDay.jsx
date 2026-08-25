import React from "react";
import "./forecastDay.css";

export default function ForecastDay(props) {
  function day() {
    // Converts Unix timestamp (seconds) to JavaScript Date (milliseconds)
    const date = new Date(props.data.time * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }

  return (
    <div className="ForecastDay">
      <div className="fw-bold fs-5">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        width="46"
      />
      <div>
        <span className="fw-bold fs-6">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        {"   "}
        <span className="fs-6">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
