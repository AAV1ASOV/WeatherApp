const storage = {
  saveFavoriteCities: (cities) => localStorage.setItem('favoriteCities', JSON.stringify([...cities])),
  getFavoriteCities: () => {
    try {
      return new Map(JSON.parse(localStorage.getItem('favoriteCities')));
    } catch {
      return false;
    }
  },
  saveCurrentCity: (city) => localStorage.setItem('currentCity', JSON.stringify(city)),
  getCurrentCity: () => {
    try {
      return JSON.parse(localStorage.getItem('currentCity'))
    } catch {
      return false;
    }
  }
}

const favoriteCities = storage.getFavoriteCities();
const currentCity = storage.getCurrentCity();

export { storage, favoriteCities, currentCity }
