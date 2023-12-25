import { API } from './constants.js'
import { throwError } from './error.js';
import { ERRORS } from './constants.js';

const { URL, KEY, WEATHER_REQUEST, FORECAST_REQUEST } = API;
const { EMPTY_INPUT } = ERRORS

const getWeatherData = async (cityName) => {
  const response = await fetch(`${URL}${WEATHER_REQUEST}?q=${cityName}&appid=${KEY}&units=metric`);

  if (cityName === '') throwError(EMPTY_INPUT);
  if (!response.ok) {
    throwError(response.status);
  }

  return await response.json();
}

const getForecastData = async (lat, lon) => {
  const response = await fetch(`${URL}${FORECAST_REQUEST}?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`);

  return await response.json();
}

export { getWeatherData, getForecastData }
