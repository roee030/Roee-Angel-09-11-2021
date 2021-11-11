import React, { useEffect } from 'react';
import PageHeader from './page-header/PageHeader';
import styles from './Layout.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const Layout = ({ children, userDetails }) => {
    const themeMode = useSelector(state => state.theme);
    return (
        <div className={styles.root}>
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
