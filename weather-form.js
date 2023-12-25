import { NODES } from './constants.js';
import { storage } from './storage.js';
import { showError } from './error.js';
import { getWeatherData, getForecastData } from './fetch.js';
import { renderWeather, renderForecastData } from './render.js';

const { formInputNode, searchFormNode } = NODES;

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  const cityName = formInputNode.value;
  initWeather(cityName);
  formInputNode.value = '';
}

const initWeather = async (city) => {
  try {
    const weatherData = await getWeatherData(city);
    storage.saveCurrentCity(weatherData.name);
    renderWeather(weatherData);

    const coordinates = weatherData.coord;
    const forecastData = await getForecastData(coordinates.lat, coordinates.lon);
    renderForecastData(forecastData);
  } catch (error) {
    showError(error);
  }
};

const initSearchForm = () => {
  searchFormNode.addEventListener('submit', formSubmitHandler);
}

export { initWeather, initSearchForm }
