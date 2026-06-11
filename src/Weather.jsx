import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="text" placeholder="Enter City..." />
        <input type="submit" value="Search" />
      </form>
      <h4>Los Angeles</h4>
      <ul>
        <li>Wednesday 11:33 PM</li>
        <li>Rainy</li>
        <li>⛈️51°C</li>
      </ul>
      <ul>
        <li>Precipitation: 75%</li>
        <li>Humidity: 90% </li>
        <li>Wind: 10 mph</li>
      </ul>
    </div>
  );
}
