import theme from './theme';
import degree from './degree';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    theme,
    degree,
});

export default rootReducer;