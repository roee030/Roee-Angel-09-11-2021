import themeActions from './themeActions';
import degreeActions from './degreeActions';
import {
    autoCompleteDataSearch,
    getWeatherData,
    getFiveDaysWeatherData,
    updateFavoriteWeatherLocations
} from './weatherActions';

const allActions = {
    themeActions,
    degreeActions,
    autoCompleteDataSearch,
    getWeatherData,
    getFiveDaysWeatherData,
    updateFavoriteWeatherLocations
};

export default allActions;