import config from '../config/';
const axios = require('axios');

export const getCurrentCondition = async (apiKey) => {
    return await axios.get(`${config.baseUrl}/currentconditions/v1/${apiKey}?apikey=${config.apiKey}`);
};

export const getAutoCompleteCities = async (city) => {
    return await axios.get(`${config.baseUrl}/locations/v1/cities/autocomplete?apikey=${config.apiKey}&q=${city}`);
};

export const getFiveDaysForecast = async (apiKey) => {
    return await axios.get(`${config.baseUrl}/forecasts/v1/daily/5day/${apiKey}?apikey=${config.apiKey}`);
};

