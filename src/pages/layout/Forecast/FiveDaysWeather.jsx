import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import DayForcast from './DayForcast';
import allActions from 'redux/actions';
import styles from './FiveDaysWeather.module.scss';


const FiveDaysWeather = () => {
    const weatherData = useSelector(state => state.weatherData.selectedData);
    const dispatch = useDispatch();
    const fiveDaysWeather = useSelector(state => state.fiveDaysWeatherData.fiveDaysWeather.DailyForecasts);
    console.log("🚀 ~ file: FiveDaysWeather.jsx ~ line 12 ~ FiveDaysWeather ~ fiveDaysWeather", fiveDaysWeather);

    useEffect(() => {
        dispatch(allActions.getFiveDaysWeatherData(weatherData.id));
    }, [dispatch, weatherData.id]);

    return (
        <div className={styles.root}>
            {fiveDaysWeather ? fiveDaysWeather.map((dayForcast) =>
                <DayForcast forcast={dayForcast} />
            ) : null}
        </div>
    );
};

export default FiveDaysWeather;
