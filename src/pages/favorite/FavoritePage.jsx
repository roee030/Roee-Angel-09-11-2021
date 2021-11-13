import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FavoritePage.module.scss';
import FavoriteItem from './FavoriteItem';

const FavoritePage = () => {
    const myFavoriteLocations = useSelector(state => state.favoriteLocations.ObjectsList);

    return (
        <div className={styles.root}>
            {myFavoriteLocations.map(location => <FavoriteItem key={location.id} location={location} />)}
        </div>
    );
};

export default FavoritePage;
