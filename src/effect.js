import { useEffect } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

const Getlocation = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=fc10ba00ea743d18df7d6f3a06dcab3e`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export default Getlocation;
