import {
    AUTOCOMPLETE_SEARCH_LIST_SUCCESS,
    AUTOCOMPLETE_SEARCH_LIST_PENDING,
    AUTOCOMPLETE_SEARCH_LIST_FAIL,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    FETCH_DATA_PENDING,
    FETCH_FIVE_DAYS_DATA_PENDING,
    FETCH_FIVE_DAYS_DATA_FAIL,
    FETCH_FIVE_DAYS_DATA_SUCCESS,
    UPDATE_FAVORITE_LOCATION,
} from 'utils/constants/types';
import { getAutoCompleteCities, getCurrentCondition, getFiveDaysForecast } from 'utils/services/weatherService';

export const autoCompleteDataSearch = (input) => async (dispatch) => {
    dispatch({ type: AUTOCOMPLETE_SEARCH_LIST_PENDING });
    try {
        await getAutoCompleteCities(input).then((result) => {
            const { data } = result;
            const formattedData = data.map(result => {
                return {
                    id: Number(result.Key),
                    name: result.LocalizedName
                };
            });
            dispatch({
                type: AUTOCOMPLETE_SEARCH_LIST_SUCCESS,
                payload: formattedData,
            });
        });
    } catch (error) {
        dispatch({
            type: AUTOCOMPLETE_SEARCH_LIST_FAIL,
            payload: error
        });
    }
};

export const getWeatherData = (location) => async (dispatch) => {
    dispatch({ type: FETCH_DATA_PENDING });
    try {
        await getCurrentCondition(location.id).then(data => {
            const formattedData = { ...data.data[0], LocationName: location.name, id: location.id };
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: formattedData,
            });
        });
    } catch (error) {
        dispatch({
            type: FETCH_DATA_FAIL,
            payload: error
        });
    }
};

export const getFiveDaysWeatherData = (id) => async (dispatch) => {
    dispatch({ type: FETCH_FIVE_DAYS_DATA_PENDING });
    try {
        await getFiveDaysForecast(id).then(data => {
            dispatch({
                type: FETCH_FIVE_DAYS_DATA_SUCCESS,
                payload: data.data,
            });
        });
    } catch (error) {
        dispatch({
            type: FETCH_FIVE_DAYS_DATA_FAIL,
            payload: error
        });
    }
};

export const updateFavoriteWeatherLocations = (newList) => {
    console.log("🚀 ~ newList", newList);
    return {
        type: UPDATE_FAVORITE_LOCATION,
        payload: newList
    };
};
