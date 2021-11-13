import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import clsx from 'clsx';
import styles from './FavoritePage.module.scss';
import FavoriteItem from './FavoriteItem';

const FavoritePage = () => {
    const myFavoriteLocations = useSelector(state => state.favoriteLocations.ObjectsList);
    // console.log("🚀 ~ file: FavoritePage.jsx ~ line 10 ~ FavoritePage ~ myFavoriteLocations", JSON.parse(localStorage.getItem('favoriteList')));

    return (
        <div className={styles.root}>
            {/* {myFavoriteLocations.map(id => <FavoriteItem locationId={{ id: id }} />)} */}
        </div>
    );
};

export default FavoritePage;
