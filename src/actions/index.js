import axios from 'axios';

const API_KEY = 'f0a8f4cd35567dc3c72bac8a72a34ade';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}
