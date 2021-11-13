import Button from 'pages/common/button/Button';
import React, { useEffect, useState } from 'react';
import styles from './Forecast.module.scss';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import FiveDaysWeather from './FiveDaysWeather';

const iconURL = 'https://developer.accuweather.com/sites/default/files/';

const Forecast = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector(state => state.theme);
    const degreeUnits = useSelector(state => state.degree);
    const weatherData = useSelector(state => state.weatherData.selectedData);
    const weatherDataPending = useSelector(state => state.weatherData.pending);
    const weatherDataError = useSelector(state => state.weatherData.error);

    return (
        Object.keys(weatherData).length ?
            <div className={clsx({
                [styles.lightMode]: themeMode,
                [styles.darkMode]: !themeMode,
            }, styles.root)}>
                <div className={styles.mainForcastRoot}>
                    <div className={styles.mainForcast}>
                        <img className={styles.forcastIcon} src={`${iconURL}${weatherData.WeatherIcon}-s.png`} alt={''} />
                        <div className={styles.todayForcast}>
                            <div className={styles.location}>{weatherData.LocationName}</div>
                            <div className={styles.todayForcast}>{degreeUnits
                                ? weatherData.Temperature?.Imperial.Value + "°" + weatherData.Temperature?.Imperial.Unit
                                : weatherData.Temperature.Metric.Value + "°" + weatherData.Temperature.Metric.Unit}</div>
                        </div>
                    </div>
                    <Button className={styles.favorite}>Add to favorite ❤</Button>
                </div>
                <div className={styles.forcast}>{weatherData.WeatherText}</div>
                <FiveDaysWeather />
            </div>
            : null
    );
};

export default Forecast;
