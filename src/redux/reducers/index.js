import theme from './theme';
import degree from './degree';
import {
    searchResults,
    weatherData,
    fiveDaysWeatherData,
    favoriteLocations,
    myWeatherData
} from './weather';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    theme,
    degree,
    searchResults,
    weatherData,
    fiveDaysWeatherData,
    favoriteLocations,
    myWeatherData
});

export default rootReducer;