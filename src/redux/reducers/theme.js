import { LIGHT_THEME, DARK_THEME } from 'utils/constants/types';

export const theme = (theme = true, action) => {
    switch (action.type) {
        case LIGHT_THEME:
            return theme = true;
        case DARK_THEME:
            return theme = false;
        default:
            return theme;
    }
};

export default theme;