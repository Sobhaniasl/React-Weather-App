import { useState, useEffect } from "react";
import { WEATHER_API_KEY } from "../../api";

const Geoweather = ({ weatherLocation }) => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log("Lat:" + position.coords.latitude);
      // console.log("Lon:" + position.coords.longitude);
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ).then(async (response) => {
        const weatherLocation = await response.json();
        setLocation({ ...weatherLocation });
        //console.log(location);
      });
    });
  }, []);
  return (
    <div>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{location.name}</p>
            {location ? (
              <p className="city">{location.weather[0].description}</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {location ? (
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${location.weather[0].icon}.png`}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="bottom">
          {location ? (
            <p className="temperature">{Math.round(location.main.temp)}°C</p>
          ) : (
            <p>Loading...</p>
          )}

          <div className="details">
            <div className="parameter-row"></div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              {location ? (
                <span className="parameter-value">
                  {Math.round(location.main.feels_like)}°C
                </span>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              {location ? (
                <span className="parameter-value">
                  {location.wind.speed} m/s
                </span>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="parameter-row">
              <span className="parameter-label">humidity</span>
              {location ? (
                <span className="parameter-value">6%</span>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="parameter-row">
              <span className="parameter-label">pressure</span>
              {location ? (
                <span className="parameter-value">
                  {location.main.pressure} hPa
                </span>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geoweather;
