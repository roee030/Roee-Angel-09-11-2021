import themeActions from './themeActions';
import degreeActions from './degreeActions';
import {
    autoCompleteDataSearch,
    getWeatherData,
    getFiveDaysWeatherData,
    updateFavoriteWeatherLocations,
    getMyWeatherData
} from './weatherActions';

const allActions = {
    themeActions,
    degreeActions,
    autoCompleteDataSearch,
    getWeatherData,
    getFiveDaysWeatherData,
    updateFavoriteWeatherLocations,
    getMyWeatherData,
};

export default allActions;