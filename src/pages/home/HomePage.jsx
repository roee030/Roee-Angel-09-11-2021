import React from 'react';
import Input from 'pages/common/input/Input';
import styles from './HomePage.module.scss';
import Forecast from 'pages/layout/Forecast/Forecast';

//yxmfmsuqdnzqkpoovx@sdvft.com 207186449
const HomePage = () => {

    return (
        <div className={styles.root}>
            <Input />
            <Forecast />
        </div>
    );
};

export default HomePage;
