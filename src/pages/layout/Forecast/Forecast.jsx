import Button from 'pages/common/button/Button';
import React from 'react';
import DayForcast from './DayForcast';
import styles from './Forecast.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

//https://bas.dev/projects/weather-icons
const Forecast = () => {
    const themeMode = useSelector(state => state.theme);

    return (
        <div className={clsx({
            [styles.lightMode]: themeMode,
            [styles.darkMode]: !themeMode,
        }, styles.root)}>
            <div className={styles.mainForcastRoot}>
                <div className={styles.mainForcast}>
                    <img className={styles.forcastIcon} src={'https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg'} alt={''} />
                    <div className={styles.todayForcast}>
                        <div className={styles.location}>Tel Aviv</div>
                        <div className={styles.todayForcast}>38</div>
                    </div>
                </div>
                <Button className={styles.favorite}>Add to favorite ❤</Button>
            </div>
            <div className={styles.forcast}>Mostly cloudy</div>
            <div className={styles.dayForcastRoot}>
                <DayForcast />
                <DayForcast />
                <DayForcast />
                <DayForcast />
                <DayForcast />
            </div>
        </div>
    );
};

export default Forecast;
