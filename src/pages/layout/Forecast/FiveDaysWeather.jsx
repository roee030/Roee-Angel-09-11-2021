import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DayForecast from './DayForecast';
import allActions from 'redux/actions';
import styles from './FiveDaysWeather.module.scss';

const FiveDaysWeather = () => {
    const weatherData = useSelector(state => state.weatherData.selectedData);
    const dispatch = useDispatch();
    const fiveDaysWeather = useSelector(state => state.fiveDaysWeatherData.fiveDaysWeather.DailyForecasts);
    console.log("🚀 ~ file: FiveDaysWeather.jsx ~ line 11 ~ FiveDaysWeather ~ fiveDaysWeather", fiveDaysWeather);

    useEffect(() => {
        if (weatherData.id) {

            dispatch(allActions.getFiveDaysWeatherData(weatherData.id));
        }
    }, [dispatch, weatherData.id]);

    return (
        <div className={styles.root}>
            {fiveDaysWeather ? fiveDaysWeather.map((dayForecast, index) =>
                <DayForecast key={index} forecast={dayForecast} />
            ) : null}
        </div>
    );
};

export default FiveDaysWeather;
