import React, { useEffect } from 'react';
import styles from './FavoritePage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';

const FavoriteItem = ({ locationId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.getWeatherData(locationId));
    }, [dispatch, locationId]);

    return (
        <div>

        </div>
    );
};

export default FavoriteItem;
