import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = ({
    label,
    errorMessage,
    hasError,
    name,
    value,
    onChange,
    classes = {},
    disabled,
    type = 'text',
    onBlur,
}) => {
    return (
        <div className={clsx(styles.root, classes.root)}>
            <label className={clsx(styles.label, classes.label)}>{label}</label>
            <div className={clsx(styles.fieldWrapper, classes.fieldWrapper)}>
                <input
                    className={clsx({
                        [styles.field]: true,
                        [styles.disabled]: disabled,
                    }, classes.field)}
                    type={type}
                    value={value}
                    onChange={e => onChange(name, e.target.value)}
                    disabled={disabled}
                    onBlur={onBlur}
                />
                <span className={clsx({
                    [styles.fieldErrorMessage]: true,
                    [styles.show]: hasError,
                })}>
                    {errorMessage}
                </span>
            </div>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onBlur: PropTypes.func,
    classes: PropTypes.object,
};

export default Input;
