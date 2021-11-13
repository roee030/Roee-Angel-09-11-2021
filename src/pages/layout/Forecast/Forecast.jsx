import Button from 'pages/common/button/Button';
import React, { useEffect, useState } from 'react';
import styles from './Forecast.module.scss';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import FiveDaysWeather from './FiveDaysWeather';
import WeatherIcon from 'pages/common/weatherIcon/WeatherIcon';

const iconURL = 'https://developer.accuweather.com/sites/default/files/';

const Forecast = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector(state => state.theme);
    const degreeUnits = useSelector(state => state.degree);
    const weatherData = useSelector(state => state.weatherData.selectedData);
    const myFavoriteList = useSelector(state => state.favoriteLocations.idList);
    console.log("🚀 ~ file: Forecast.jsx ~ line 18 ~ Forecast ~ myFavoriteList", myFavoriteList);
    const weatherDataPending = useSelector(state => state.weatherData.pending);
    const weatherDataError = useSelector(state => state.weatherData.error);
    const isFavorite = myFavoriteList.some(locationId => locationId === weatherData.id);

    return (
        Object.keys(weatherData).length ?
            <div className={clsx({
                [styles.lightMode]: themeMode,
                [styles.darkMode]: !themeMode,
            }, styles.root)}>
                <div className={styles.mainForcastRoot}>
                    <div className={styles.mainForcast}>
                        <WeatherIcon iconId={weatherData.WeatherIcon} />
                        <div className={styles.todayForcast}>
                            <div className={styles.location}>{weatherData.LocationName}</div>
                            <div className={styles.todayForcast}>{degreeUnits
                                ? weatherData.Temperature?.Imperial.Value + "°" + weatherData.Temperature?.Imperial.Unit
                                : weatherData.Temperature.Metric.Value + "°" + weatherData.Temperature.Metric.Unit}</div>
                        </div>
                    </div>
                    <Button className={styles.favorite}
                        onClick={
                            isFavorite
                                ? () => dispatch(allActions.updateFavoriteWeatherLocations(myFavoriteList.filter(id => id !== weatherData.id)))
                                : () => dispatch(allActions.updateFavoriteWeatherLocations([...myFavoriteList, weatherData.id]))
                        }
                    >
                        {isFavorite ? "Remove from Favorite ❤" : "Add to favorite ❤"}

                    </Button>
                </div>
                <div className={styles.forcast}>{weatherData.WeatherText}</div>
                <FiveDaysWeather />
            </div>
            : null
    );
};

export default Forecast;
