import React, { useEffect } from 'react';
import styles from './FavoritePage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import WeatherIcon from 'pages/common/weatherIcon/WeatherIcon';

const FavoriteItem = ({ location }) => {
    console.log("🚀 ~ file: FavoriteItem.jsx ~ line 7 ~ FavoriteItem ~ location", location);
    const dispatch = useDispatch();
    const degreeUnits = useSelector(state => state.degree);

    return (
        <div>
            <div>{location.LocationName}</div>
            <WeatherIcon iconId={location.iconId} />
            <div>{degreeUnits
                ? location.ImperialTemperature + " °" + location.ImperialTemperatureUnit
                : location.MetricTemperature + " °" + location.MetricTemperatureUnit}</div>
            <div>Show More</div>
        </div>
    );
};

export default FavoriteItem;
