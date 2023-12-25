import { renderFavorites } from './render.js'
import { storage, favoriteCities } from './storage.js';
import { initWeather } from './weather-form.js';
import { NODES, SELECTORS } from './constants.js';

const { favoriteButton, favoritesListNode, cityNameNode } = NODES;
const { favoriteCityItemClass, closeFavoriteButtonClass, paintedFavoriteButtonClass } = SELECTORS;

const cityId = () => cityNameNode.dataset.id;

const isFavoriteCity = () => {
  return favoriteCities.has(cityId());
}

const isFavoriteButtonPainted = () => {
  isFavoriteCity() ?
    favoriteButton.classList.add(paintedFavoriteButtonClass) :
    favoriteButton.classList.remove(paintedFavoriteButtonClass);
}

const addFavorite = () => {
  favoriteCities.set(cityId(), cityNameNode.textContent);
  storage.saveFavoriteCities(favoriteCities);
  renderFavorites();
}

const removeFavorite = (id) => {
  favoriteCities.delete(id);
  storage.saveFavoriteCities(favoriteCities);
  renderFavorites();
}

const favoriteButtonClickHandler = () => {
  isFavoriteCity() ? removeFavorite(cityId()) : addFavorite();
}

const removeButtonClickHandler = (evt) => {
  if (evt.target.closest(`.${closeFavoriteButtonClass}`)) {
    removeFavorite(evt.target.dataset.id);
  }
}

const favoriteItemClickHandler = (evt) => {
  if (evt.target.className === favoriteCityItemClass) {
    initWeather(evt.target.textContent);
  }
}

favoriteButton.addEventListener('click', favoriteButtonClickHandler);
favoritesListNode.addEventListener('click', removeButtonClickHandler);
favoritesListNode.addEventListener('click', favoriteItemClickHandler);

export { isFavoriteButtonPainted }


