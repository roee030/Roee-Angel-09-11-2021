import React, { useState } from 'react';
import PageHeader from './page-header/PageHeader';
import styles from './Layout.module.scss';

const Layout = ({ children, userDetails }) => {


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
