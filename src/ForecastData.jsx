import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function ForecastData(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);

    if (props.city) {
      const apiKey = "18o7a0b8f4af4db5fa386d3ft8f43fea";
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=imperial`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [props.city]);

  function handleResponse(response) {
    if (response.data && response.data.daily) {
      const fiveDays = response.data.daily.slice(0, 5);
      setForecastData(fiveDays);
      setLoaded(true);
    } else {
      console.error("Forecast data missing from API response:", response.data);
    }
  }

  if (loaded && forecastData) {
    return (
      <div className="ForecastData container mt-4">
        <div className="row justify-content-center">
          {forecastData.map((dailyForecast, index) => (
            <div className="col text-center" key={index}>
              <ForecastDay data={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="text-center mt-3">Loading forecast...</div>;
  }
}
