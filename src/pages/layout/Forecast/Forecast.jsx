import Button from 'pages/common/button/Button';
import React, { useEffect, useRef } from 'react';
import styles from './Forecast.module.scss';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import FiveDaysWeather from './FiveDaysWeather';
import WeatherIcon from 'pages/common/weatherIcon/WeatherIcon';
import useAlerts from 'utils/hooks/useAlerts';
import { ReactComponent as Loading } from 'assets/icons/LoadingAnimated.svg';

const Forecast = () => {
    const dispatch = useDispatch();
    const { generalError } = useAlerts();
    const themeMode = useSelector(state => state.theme);
    const degreeUnits = useSelector(state => state.degree);
    const weatherData = useSelector(state => state.weatherData.selectedData);
    const myFavoriteList = useSelector(state => state.favoriteLocations.ObjectsList);
    const weatherDataPending = useSelector(state => state.weatherData.pending);
    const weatherDataError = useSelector(state => state.weatherData.error);
    const myWeatherData = useSelector(state => state.myWeatherData.data);
    const myWeatherDataError = useSelector(state => state.myWeatherData.error);
    const isFavorite = myFavoriteList?.some(location => location.id === weatherData.id);
    const loadedRef = useRef();

    useEffect(() => {
        if (navigator.geolocation && !Object.keys(myWeatherData).length && !weatherDataError && !myWeatherDataError) {
            (navigator.geolocation.getCurrentPosition((object) => {
                dispatch(allActions.getMyWeatherData(object.coords.latitude, object.coords.longitude));
                loadedRef.current = true;
            },
                () => {
                    if (Object.keys(myWeatherData).length || Object.keys(weatherData).length) {
                        return;
                    }
                    else generalError('Cannot get you Location, please search your city ');
                }
            ));
        }
    }, [dispatch, generalError, myWeatherData, myWeatherDataError, weatherData, weatherDataError]);

    useEffect(() => {
        if (Object.keys(myWeatherData).length && loadedRef.current) {
            dispatch(allActions.getWeatherData({ id: myWeatherData.Key, name: myWeatherData.LocalizedName }));
            loadedRef.current = false;
        }
    }, [dispatch, myWeatherData]);

    useEffect(() => {
        if (weatherDataError) {
            generalError(weatherDataError?.request?.statusText);
            return null;
        }
    });

    useEffect(() => {
        if (myWeatherDataError) {
            generalError(myWeatherDataError.request.statusText);
            return null;
        }
    });

    if (weatherDataPending) {
        return <Loading style={{ background: "transparnt", margin: "auto", display: "block", shapeRendering: "auto" }} />;
    }
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
                                ? weatherData.Temperature?.Imperial.Value + " ??" + weatherData.Temperature?.Imperial.Unit
                                : weatherData.Temperature.Metric.Value + " ??" + weatherData.Temperature.Metric.Unit}</div>
                        </div>
                    </div>
                    <Button
                        className={styles.favorite}
                        onClick={
                            isFavorite
                                ? () => dispatch(allActions.updateFavoriteWeatherLocations(myFavoriteList.filter(locationObject => locationObject.id !== weatherData.id)))
                                : () => dispatch(allActions.updateFavoriteWeatherLocations([...myFavoriteList,
                                {
                                    id: weatherData.id, LocationName: weatherData.LocationName, iconId: weatherData.WeatherIcon, WeatherText: weatherData.WeatherText,
                                    ImperialTemperature: weatherData.Temperature?.Imperial.Value, ImperialTemperatureUnit: weatherData.Temperature.Imperial.Unit,
                                    MetricTemperature: weatherData.Temperature?.Metric.Value, MetricTemperatureUnit: weatherData.Temperature.Metric.Unit
                                }]))
                        }
                    >
                        {isFavorite
                            ? "Remove ???"
                            : "Add ???"
                        }

                    </Button>
                </div>
                <div className={styles.forcast}>{weatherData.WeatherText}</div>
                <FiveDaysWeather />
            </div>
            : null
    );
};

export default Forecast;
