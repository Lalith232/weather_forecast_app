import React from "react";
import "./Forecast.css"; // keep your forecast styling

function ForecastList({ forecast }) {
  return (
    <div className="forecast-list">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map((item, index) => {
          const date = new Date(item.dt_txt);
          const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          const iconCode = item.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

          return (
            <div className="forecast-card" key={index}>
              <h4>{dayName}, {formattedDate}</h4>
              <img src={iconUrl} alt={item.weather[0].description} />
              <p>{item.main.temp} °C</p>
              <p>{item.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastList;
