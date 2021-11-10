import { LIGHT_THEME, DARK_THEME } from 'utils/constants/types';

export const theme = (state = { theme: true }, action) => {
    console.log("🚀 ~ file: theme.js ~ line 13 ~ themeReducer ~ action", action);
    switch (action.type) {
        case LIGHT_THEME:
            return { theme: true };
        case DARK_THEME:
            return { theme: false };
        default:
            return state;
    }
};

export default theme;