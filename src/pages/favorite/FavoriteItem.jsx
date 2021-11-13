import React from 'react';
import styles from './FavoriteItem.module.scss';
import WeatherIcon from 'pages/common/weatherIcon/WeatherIcon';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import allActions from 'redux/actions';
import Button from 'pages/common/button/Button';

const FavoriteItem = ({ location }) => {
    const themeMode = useSelector(state => state.theme);
    const degreeUnits = useSelector(state => state.degree);
    const dispatch = useDispatch();
    let history = useHistory();
    const showMoreDetails = () => {
        dispatch(allActions.getWeatherData(location));
        history.push('/');
    };
    return (
        <div className={clsx({
            [styles.lightMode]: themeMode,
            [styles.darkMode]: !themeMode,
        }, styles.dayForcast)}>
            <div className={styles.name}>{location.LocationName}</div>
            <WeatherIcon iconId={location.iconId} />
            <div className={styles.degree}>{degreeUnits
                ? location.ImperialTemperature + " °" + location.ImperialTemperatureUnit
                : location.MetricTemperature + " °" + location.MetricTemperatureUnit}</div>
            <Button onClick={showMoreDetails} className={styles.moreDetails}>Show More Details</Button>
        </div>
    );
};

export default FavoriteItem;
