import React from 'react';
import styles from './PageHeader.module.scss';
import clsx from 'clsx';
import Button from 'pages/common/button/Button';
import useBreakpoints from 'utility/hooks/useBreakpoints';
import logo from 'assest/icons/herolo_logo.png';

const PageHeader = () => {
    const { isMobileWidth } = useBreakpoints();
    return (
        <div className={styles.root}>
            <div className={styles.headerRightSide}>
                {isMobileWidth
                    ? <img className={styles.logo} src={logo} alt={'logo'} />
                    : 'HEROLO WEATHER APP'}
            </div>
            <div className={styles.headerLeftSide}>
                <Button className={styles.button}>HOME</Button>
                <Button className={styles.button}>FAVORITE</Button>
                <Button className={styles.button}>SETTINGS</Button>
            </div >
        </div >
    );
};

export default PageHeader;
