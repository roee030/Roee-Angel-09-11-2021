import React from 'react';
import Input from 'pages/common/input/Input';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.searchInput}>
                <Input
                    onChange={(e) => console.log(e)}
                />
            </div>
        </div>
    );
};

export default HomePage;
