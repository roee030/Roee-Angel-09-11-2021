import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import clsx from 'clsx';
import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.weatherData.selectedData);

    return (
        <div>
            FavoritePage
        </div>
    );
};

export default FavoritePage;
