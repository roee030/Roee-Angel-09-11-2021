import React from 'react';
import styles from './WeatherIcon.module.scss';
const iconURL = 'https://developer.accuweather.com/sites/default/files/';

const WeatherIcon = ({ iconId }) => {
    return (
        <img className={styles.forcastIcon} src={`${iconURL}${iconId > 9 ? iconId : "0" + iconId}-s.png`} alt={''} />
    );
};

export default WeatherIcon;
