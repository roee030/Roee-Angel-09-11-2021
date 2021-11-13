import React from 'react';
import styles from './DayForcast.module.scss';
import clsx from 'clsx';
import convertUTFToLocalDate from 'utils/converters/convertUTCToLocalDate';
import WeatherIcon from 'pages/common/weatherIcon/WeatherIcon';
import convertFarenheitTocelsius from 'utils/converters/convertFahrenheitToCelsius';
import { useSelector } from 'react-redux';

const DayForcast = ({ forcast }) => {
    const themeMode = useSelector(state => state.theme);
    const degreeUnits = useSelector(state => state.degree);

    return (
        <div className={clsx({
            [styles.lightMode]: themeMode,
            [styles.darkMode]: !themeMode,
        }, styles.dayForcast)}
        >
            <div className={styles.forcastDay}>{convertUTFToLocalDate(forcast.Date)}</div>
            <WeatherIcon iconId={forcast.Day.Icon} />
            <div className={styles.forcasttemperature}>
                {degreeUnits
                    ? forcast.Temperature.Maximum.Value + "°F -" + forcast.Temperature.Minimum.Value + "°F"
                    : convertFarenheitTocelsius(forcast.Temperature.Maximum.Value) + "°C -" + convertFarenheitTocelsius(forcast.Temperature.Minimum.Value) + "°C"}
            </div>
            <div className={styles.forcastText}>{forcast.Day.IconPhrase}  </div>
        </div>
    );
};


export default DayForcast;
