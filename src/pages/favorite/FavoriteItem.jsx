import React, { useEffect } from 'react';
import styles from './FavoriteItem.module.scss';
import { useSelector } from 'react-redux';
import WeatherIcon from 'pages/common/weatherIcon/WeatherIcon';
import clsx from 'clsx';

const FavoriteItem = ({ location }) => {
    const themeMode = useSelector(state => state.theme);
    const degreeUnits = useSelector(state => state.degree);

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
            <div className={styles.moreDetails}>Show More Details</div>
        </div>
    );
};

export default FavoriteItem;
