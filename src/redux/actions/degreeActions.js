import { CELSIUS, FAHRENHIT } from 'utils/constants/types';

export const setDegree = (degree) => {
    if (degree === true) {
        return {
            type: FAHRENHIT,
            payload: degree
        };
    } else {
        return {
            type: CELSIUS,
            payload: degree
        };
    }

};
export default setDegree;