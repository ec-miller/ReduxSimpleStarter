import axios from 'axios';

const API_KEY = '7f6306190c357dd28eea6bfe7c0e831d';
//this variable is available to this action and all reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  if (!city) {
    city = 'Minnetonka';
  }
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
