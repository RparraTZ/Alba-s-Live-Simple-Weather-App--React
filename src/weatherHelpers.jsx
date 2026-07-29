export function formatWeatherData(apiData) {
  const dateObject = new Date(apiData.time * 1000);

  const displayTime = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(dateObject);

  const displayDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(dateObject);

  const temperature = Math.round(apiData.temperature.current);
  const celTemp = Math.round((temperature - 32) / 1.8);

  const hour = dateObject.getHours();
  const themeClass = hour < 6 || hour >= 18 ? "night-mode" : "day-mode";

  return {
    displayTime,
    displayDate,
    temperature,
    celTemp,
    themeClass,
    cityName: apiData.city,
    description: apiData.condition.description,
    humidity: apiData.temperature.humidity,
    windSpeed: Math.round(apiData.wind.speed),
    weatherIcon: apiData.condition.icon_url,
  };
}
