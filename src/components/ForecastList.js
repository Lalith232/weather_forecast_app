import React from "react";

function ForecastList({ forecast }) {
  return (
    <div className="forecast-list">
      <h3>5-Day Forecast</h3>
      <ul>
        {forecast.map((item, index) => (
          <li key={index}>
            {new Date(item.dt_txt).toLocaleDateString()} - {item.main.temp} °C, {item.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForecastList;
