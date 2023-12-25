const DEFAULT_CITY = 'Moscow';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const TIME_CONSTANTS = {
  maxForecastPeriods: 3,
  secondsInMinute: 60,
  millisecondsInSecond: 1000
}

const NODES = {
  searchFormNode: document.querySelector('.search-bar-form'),
  formInputNode: document.querySelector('.search-bar'),
  cityNameNode: document.querySelector('.current-city'),
  mainTemperatureNode: document.querySelector('.tab-now-temp'),
  feelsLikeNode: document.querySelector('.tab-details-feels-like'),
  sunriseNode: document.querySelector('.tab-details-sunrise'),
  sunsetNode: document.querySelector('.tab-details-sunset'),
  mainWeatherIconNode: document.querySelector('.tab-now-weather-icon'),
  forecastTemperatureNodes: document.querySelectorAll('.tab-forecast-temp'),
  forecastFeelsLikeNodes: document.querySelectorAll('.tab-forecast-feels-like'),
  forecastSkyNodes: document.querySelectorAll('.tab-forecast-weather'),
  forecastIconNodes: document.querySelectorAll('.tab-forecast-weather-icon'),
  forecastTimingNodes: document.querySelectorAll('.tab-forecast-time'),
  userTimeNode: document.querySelector('.current-time'),
  favoriteButton: document.querySelector('.button-favourite'),
  favoritesListNode: document.querySelector('.locations-list'),
  weatherAppNode: document.querySelector('.weather-app')
}

const SELECTORS = {
  favoriteCityItemClass: 'locations-item',
  closeFavoriteButtonClass: 'button-close-locations-item',
  paintedFavoriteButtonClass: 'button-favourite-painted',
  buttonClass: 'button',
}

const API = {
  URL: 'http://api.openweathermap.org/data/2.5/',
  KEY: '492b87f4c8e299cb55f1202a33ba2d75',
  WEATHER_REQUEST: 'weather',
  FORECAST_REQUEST: 'forecast'
}

const ERRORS = {
  FAILED_TO_FETCH: 'Не удалось выполнить запрос, проверьте соединение и адрес запроса',
  CITY_NOT_FOUND: 'Нет такого города',
  API_KEY_PROBLEM: 'Проверьте АПИ-ключ',
  TOO_MANY_REQUESTS: 'Вы превысили лимит запросов (60 в минуту)',
  PLEASE_CONTACT_DEVELOPERS: 'Свяжитесь с разработчиками',
  EMPTY_INPUT: 'Введите город'
}

export { NODES, DEFAULT_CITY, MONTHS, TIME_CONSTANTS, SELECTORS, API, ERRORS }
