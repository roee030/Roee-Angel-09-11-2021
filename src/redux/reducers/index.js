import theme from './theme';
import degree from './degree';
import { searchResults, weatherData, fiveDaysWeatherData } from './weather';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    theme,
    degree,
    searchResults,
    weatherData,
    fiveDaysWeatherData
});

export default rootReducer;