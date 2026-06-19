import axios from "axios";

const API_KEY = "6af8486c8b286f43d683bb67e92f2cc9"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });
  return response.data;
};

export const fetchForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}forecast`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });
  return response.data;
};
