import { WEATHER_API_KEY } from "../../api";

navigator.geolocation.getCurrentPosition((position) => {
  console.log("Lat:" + position.coords.latitude);
  console.log("Lon:" + position.coords.longitude);
});

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
});
const geoLocation1 = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  ).then((response) => console.log(response));
};

export default geoLocation1;
