import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const Button = ({ children, onClick, }) => {
    const themeMode = useSelector(state => state.theme);

    return (
        <button
            className={clsx({
                [styles.lightMode]: themeMode,
                [styles.darkMode]: !themeMode,
            }, styles.root)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default Button;
