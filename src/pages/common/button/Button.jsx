import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, onClick, className: classNameFromParent }) => {
    return (
        <button
            className={clsx(styles.root, classNameFromParent)}
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
