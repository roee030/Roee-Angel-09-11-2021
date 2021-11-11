import React from 'react';
import DayForcast from './DayForcast';
import styles from './Forecast.module.scss';

const Forecast = () => {
    return (
        <div className={styles.root}>
            <div>
                <div>today forcast</div>
                <div>favorite</div>
            </div>
            <div>Title</div>
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
