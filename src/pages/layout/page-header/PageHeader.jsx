import React from 'react';
import styles from './PageHeader.module.scss';
import clsx from 'clsx';

const PageHeader = () => {
    return (
        <div className={styles.root}>
            <div className={styles.headerRightSide}>
                HEROLO WEATHER APP
            </div>
            <div className={styles.headerLeftSide}>
                <div className={styles.button}>HOME</div>
                <div className={styles.button}>FAVORITE</div>
                <div className={styles.button}>SETTINGS</div>
            </div>
        </div>
    );
};

export default PageHeader;
