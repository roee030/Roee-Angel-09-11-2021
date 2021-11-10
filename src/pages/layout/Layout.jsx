import React, { useState } from 'react';
import PageHeader from './page-header/PageHeader';
import styles from './Layout.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

const Layout = ({ children, userDetails }) => {
    const themeMode = useSelector(state => state.theme.theme);
    console.log(themeMode);

    return (
        <div className={clsx({
            [styles.root]: true,
            [styles.darkMode]: !themeMode,
            [styles.lightMode]: themeMode,
        })}>
            <div className={styles.pageWrapper}>
                <PageHeader />
                <div className={styles.pageContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
