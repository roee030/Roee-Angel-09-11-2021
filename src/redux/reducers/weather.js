import {
    AUTOCOMPLETE_SEARCH_LIST_SUCCESS,
    AUTOCOMPLETE_SEARCH_LIST_PENDING,
    AUTOCOMPLETE_SEARCH_LIST_FAIL,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    FETCH_DATA_PENDING,
    FETCH_FIVE_DAYS_DATA_PENDING,
    FETCH_FIVE_DAYS_DATA_SUCCESS,
    FETCH_FIVE_DAYS_DATA_FAIL,
    UPDATE_FAVORITE_LOCATION,
} from 'utils/constants/types';

export const searchResults = (state = { results: [] }, action) => {
    switch (action.type) {
        case AUTOCOMPLETE_SEARCH_LIST_SUCCESS:
            return { ...state, results: action.payload, pending: false, error: null };
        case AUTOCOMPLETE_SEARCH_LIST_PENDING:
            return { ...state, pending: true };
        case AUTOCOMPLETE_SEARCH_LIST_FAIL:
            return { ...state, pending: false, error: action.payload };
        default:
            return state;
    }
};

export const weatherData = (state = { selectedData: [] }, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return { ...state, selectedData: action.payload, error: null, pending: false };
        case FETCH_DATA_FAIL:
            return { ...state, error: action.payload, pending: false };
        case FETCH_DATA_PENDING:
            return { ...state, pending: true };
        default:
            return state;
    }
};
export const fiveDaysWeatherData = (state = { fiveDaysWeather: [] }, action) => {
    switch (action.type) {
        case FETCH_FIVE_DAYS_DATA_SUCCESS:
            return { ...state, fiveDaysWeather: action.payload, error: null, pending: false };
        case FETCH_FIVE_DAYS_DATA_FAIL:
            return { ...state, error: action.payload, pending: false };
        case FETCH_FIVE_DAYS_DATA_PENDING:
            return { ...state, pending: true };
        default:
            return state;
    }
};

export const favoriteLocations = (state = { idList: [] }, action) => {
    console.log(action.payload);
    switch (action.type) {
        case UPDATE_FAVORITE_LOCATION:
            localStorage.setItem('favoriteList', action.payload);
            return { ...state, idList: action.payload };
        default:
            return state;
    }
};
