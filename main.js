import { renderFavorites } from './render.js';
import { DEFAULT_CITY } from './constants.js';
import { getUserCurrentTime } from './time.js';
import { currentCity } from './storage.js';
import { initWeather, initSearchForm } from './weather-form.js';
import './favorites.js';

getUserCurrentTime();
initSearchForm();
initWeather(currentCity || DEFAULT_CITY);
renderFavorites();
