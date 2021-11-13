import React from 'react';
import styles from './DayForecast.module.scss';
import clsx from 'clsx';
import convertUTFToLocalDate from 'utils/converters/convertUTCToLocalDate';
import WeatherIcon from 'pages/common/weatherIcon/WeatherIcon';
import convertFarenheitTocelsius from 'utils/converters/convertFahrenheitToCelsius';
import { useSelector } from 'react-redux';

const DayForecast = ({ forecast }) => {
    console.log("🚀 ~ file: DayForecast.jsx ~ line 10 ~ DayForecast ~ forecast", forecast);
    const themeMode = useSelector(state => state.theme);
    const degreeUnits = useSelector(state => state.degree);

    return (forecast ?
        <div className={clsx({
            [styles.lightMode]: themeMode,
            [styles.darkMode]: !themeMode,
        }, styles.dayForcast)}
        >
            <div className={styles.forcastDay}>{convertUTFToLocalDate(forecast.Date || new Date(0))}</div>
            <WeatherIcon iconId={forecast.Day.Icon} />
            <div className={styles.forcasttemperature}>
                {degreeUnits
                    ? forecast.Temperature.Maximum.Value + "°F -" + forecast.Temperature.Minimum.Value + "°F"
                    : convertFarenheitTocelsius(forecast.Temperature.Maximum.Value) + "°C -" + convertFarenheitTocelsius(forecast.Temperature.Minimum.Value) + "°C"}
            </div>
            <div className={styles.forcastText}>{forecast.Day.IconPhrase}  </div>
        </div> : null
    );
};


export default DayForecast;
