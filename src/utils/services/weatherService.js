import config from '../config/';
const axios = require('axios');

export const getCurrentCondition = async (id) => {
    return await axios.get(`${config.baseUrl}/currentconditions/v1/${id}?apikey=${config.apiKey}`);
};

export const getAutoCompleteCities = async (id) => {
    return await axios.get(`${config.baseUrl}/locations/v1/cities/autocomplete?apikey=${config.apiKey}&q=${id}`);
};

export const getFiveDaysForecast = async (id) => {
    return await axios.get(`${config.baseUrl}/forecasts/v1/daily/5day/${id}?apikey=${config.apiKey}`);
};
export const getForecastByLocation = async (lat, lon) => {
    return await axios.get(`${config.baseUrl}/locations/v1/cities/geoposition/search?apikey=${config.apiKey}&q=${lat},${lon}`);
};

