import { removeError } from './error.js'
import { favoriteCities } from './storage.js';
import { isFavoriteButtonPainted } from './favorites.js';
import { getUserCurrentTime, getTime } from './time.js';
import { NODES, TIME_CONSTANTS, SELECTORS } from './constants.js';

const { cityNameNode, mainTemperatureNode, feelsLikeNode, sunriseNode, sunsetNode, mainWeatherIconNode,
  forecastTimingNodes, forecastTemperatureNodes, forecastFeelsLikeNodes, forecastSkyNodes, forecastIconNodes,
  favoritesListNode } = NODES;

const { favoriteCityItemClass, buttonClass, closeFavoriteButtonClass } = SELECTORS;

const { maxForecastPeriods } = TIME_CONSTANTS;

const renderWeather = (data) => {
  removeError();
  cityNameNode.textContent = data.name;
  mainTemperatureNode.textContent = data.main.temp.toFixed();
  feelsLikeNode.textContent = data.main.feels_like.toFixed();
  sunriseNode.textContent = getTime(data.sys.sunrise, data.timezone);
  sunsetNode.textContent = getTime(data.sys.sunset, data.timezone);
  mainWeatherIconNode.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  cityNameNode.dataset.id = data.id;
  getUserCurrentTime();
  isFavoriteButtonPainted();
}

const renderForecastData = (forecasts) => {
  const targetCityTimezone = forecasts.city.timezone;
  forecasts = forecasts.list.slice(0, maxForecastPeriods);

  for (let i = 0; i < maxForecastPeriods; i++) {
    forecastTimingNodes[i].textContent = getTime(forecasts[i].dt, targetCityTimezone);
    forecastTemperatureNodes[i].textContent = forecasts[i].main.temp.toFixed();
    forecastFeelsLikeNodes[i].textContent = forecasts[i].main.feels_like.toFixed();
    forecastSkyNodes[i].textContent = forecasts[i].weather[0].description;
    forecastIconNodes[i].src = `https://openweathermap.org/img/wn/${forecasts[i].weather[0].icon}@2x.png`;
    forecastIconNodes[i].width = '50';
  }
}

const renderFavorites = () => {
  favoritesListNode.innerHTML = '';

  favoriteCities.forEach((name, id) => {
    const favoriteCityNode = document.createElement('li');
    favoriteCityNode.textContent = name;
    favoriteCityNode.dataset.id = id;
    favoriteCityNode.classList.add(favoriteCityItemClass);
    favoritesListNode.append(favoriteCityNode);

    const favoriteCityRemoveButton = document.createElement(buttonClass);
    favoriteCityRemoveButton.dataset.id = id;
    favoriteCityRemoveButton.classList.add(closeFavoriteButtonClass);
    favoriteCityNode.append(favoriteCityRemoveButton);
  })
  isFavoriteButtonPainted();
}

export { renderWeather, renderForecastData, renderFavorites }
