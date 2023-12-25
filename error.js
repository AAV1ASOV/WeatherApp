import { NODES, ERRORS } from './constants.js';

const { weatherAppNode } = NODES;
const { EMPTY_INPUT, API_KEY_PROBLEM, CITY_NOT_FOUND, TOO_MANY_REQUESTS, PLEASE_CONTACT_DEVELOPERS } = ERRORS;

const throwError = (error) => {
  let errorMessage;
  switch (error) {
    case EMPTY_INPUT:
      errorMessage = EMPTY_INPUT;
      break;
    case 401:
      errorMessage = API_KEY_PROBLEM;
      break;
    case 404:
      errorMessage = CITY_NOT_FOUND;
      break;
    case 429:
      errorMessage = TOO_MANY_REQUESTS;
      break;
    case (error.status >= 500):
      errorMessage = PLEASE_CONTACT_DEVELOPERS;
      break;
  }
  throw new Error(errorMessage);
}

const showError = (error) => {
  const errorNode = document.createElement('div');
  errorNode.textContent = error.message;
  errorNode.classList.add('error');
  weatherAppNode.append(errorNode);
}

const removeError = () => {
  if (document.querySelector('.error')) document.querySelector('.error').remove();
}

export { throwError, showError, removeError }
