import axios from 'axios';

const API_Key = require('../../apiKeys').OWM;
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_Key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${rootURL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}