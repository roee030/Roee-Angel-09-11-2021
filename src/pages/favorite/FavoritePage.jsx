import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import clsx from 'clsx';
import styles from './FavoritePage.module.scss';
import FavoriteItem from './FavoriteItem';

const FavoritePage = () => {
    const myFavoriteLocations = useSelector(state => state.favoriteLocations.ObjectsList);

    return (
        <div className={styles.root}>
            {myFavoriteLocations.map(location => <FavoriteItem location={location} />)}
        </div>
    );
};

export default FavoritePage;
