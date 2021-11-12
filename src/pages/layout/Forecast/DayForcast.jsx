import React from 'react';
import styles from './DayForcast.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const DayForcast = () => {
    const themeMode = useSelector(state => state.theme);

    return (
        <div className={clsx({
            [styles.lightMode]: themeMode,
            [styles.darkMode]: !themeMode,
        }, styles.dayForcast)}>
            <div>date</div>
            <img className={styles.forcastIcon} src={'https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg'} alt={''} />
            <div>temp</div>
        </div>
    );
};

export default DayForcast;
