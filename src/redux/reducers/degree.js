import { CELSIUS, FAHRENHIT } from 'utils/constants/types';

export const degree = (degree = true, action) => {
    switch (action.type) {
        case CELSIUS:
            return degree = false;
        case FAHRENHIT:
            return degree = true;
        default:
            return degree;
    }
};

export default degree;



