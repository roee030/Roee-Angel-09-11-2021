import { LIGHT_THEME, DARK_THEME } from 'utils/constants/types';

export const setTheme = (theme) => {
    if (theme === true) {
        return {
            type: LIGHT_THEME,
            payload: theme
        };
    } else {
        return {
            type: DARK_THEME,
            payload: theme
        };
    }

};
export default setTheme;