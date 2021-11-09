import React, { useState } from 'react';
import styles from './PageHeader.module.scss';
import clsx from 'clsx';
import Button from 'pages/common/button/Button';
import useBreakpoints from 'utility/hooks/useBreakpoints';
import logo from 'assets/icons/herolo_logo.png';
import { useLocation, useHistory } from 'react-router-dom';
import ROUTES from 'routes';
import SettingMenu from './SettingMenu';

const PageHeader = () => {
    const { isMobileWidth } = useBreakpoints();
    const location = useLocation();
    const history = useHistory();

    const [isSettingMenuOpen, setisSettingMenuOpen] = useState(false);

    return (
        <div className={styles.root}>
            <div className={styles.headerRightSide}>
                {isMobileWidth
                    ? <img className={styles.logo} src={logo} alt={'logo'} />
                    : 'HEROLO WEATHER APP'}
            </div>
            <div className={styles.headerLeftSide}>
                <Button
                    className={clsx(styles.button,
                        { [styles.buttonClicked]: location.pathname === ROUTES.HOME }
                    )}
                    onClick={() => {
                        history.push({
                            pathname: ROUTES.HOME,

                        });
                    }}
                >HOME</Button>
                <Button
                    className={clsx(styles.button,
                        { [styles.buttonClicked]: location.pathname === ROUTES.FAVORITE }
                    )}
                    onClick={() => {
                        history.push({
                            pathname: ROUTES.FAVORITE,

                        });
                    }}
                >FAVORITE</Button>
                <div>

                    <Button className={clsx(styles.button,
                        { [styles.buttonClicked]: isSettingMenuOpen }
                    )}
                        onClick={() => {
                            setisSettingMenuOpen(!isSettingMenuOpen);
                        }}
                    >

                        SETTINGS

                    </Button>
                    {isSettingMenuOpen && <SettingMenu />}
                </div>
            </div >
        </div >
    );
};

export default PageHeader;
