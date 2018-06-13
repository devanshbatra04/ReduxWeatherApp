const API_Key = require('../../apiKeys').OWM;
const rootURL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_Key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}