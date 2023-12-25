import { MONTHS, TIME_CONSTANTS, NODES } from './constants.js'

const { millisecondsInSecond, secondsInMinute } = TIME_CONSTANTS;
const { userTimeNode } = NODES;
class Time {
  constructor(timestamp) {
    this.date = new Date(timestamp);
    this.hours = `0${this.date.getHours()}`;
    this.minutes = `0${this.date.getMinutes()}`;
    this.month = MONTHS[this.date.getMonth()];
  }
  getTime = () => `${this.hours.slice(-2)}:${this.minutes.slice(-2)}`;
  getDate = () => `${this.date.getDate()} ${this.month}`;
}

const getTime = (timestamp, timezone) => {
  if (timezone) {
    return (new Time(timestamp * millisecondsInSecond + getTargetTimezoneAdjusment(timezone))).getTime();
  }
  return (new Time(timestamp)).getTime();
}

const getDate = () => new Time(new Date()).getDate();

const getTargetTimezoneAdjusment = (targetCityTimezone) => {
  targetCityTimezone *= millisecondsInSecond;
  const userDate = new Date();
  const userTimezoneOffset = userDate.getTimezoneOffset() * secondsInMinute * millisecondsInSecond;

  return targetCityTimezone + userTimezoneOffset;
}

const getUserCurrentTime = () => {
  userTimeNode.textContent = `${getTime(new Date())} ${getDate()}`;
}

export { getUserCurrentTime, getTime }
