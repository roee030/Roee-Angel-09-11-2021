import React, { useState, useEffect } from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import clsx from 'clsx';
import useBreakpoints from 'utils/hooks/useBreakpoints';
import useAlerts from 'utils/hooks/useAlerts';
import { useDispatch, useSelector } from 'react-redux';
import allActions from 'redux/actions';

const Input = ({
    classes = {},
}) => {

    const { isMobileWidth } = useBreakpoints();
    const { inputError, generalError } = useAlerts();
    const dispatch = useDispatch();
    const results = useSelector((state) => state.searchResults.results);
    const newArray = results.map(a => ({ ...a }));
    const handleOnSearch = async (input) => {
        if (!/^[a-zA-Z  -]*$/.test(input)) {
            inputError();
            return;
        }
        dispatch(allActions.autoCompleteDataSearch(input));
    };

    const handleOnSelect = (location) => {
        dispatch(allActions.getWeatherData(location));
    };

    return (
        <div className={clsx(styles.root, classes.root)}>
            <div style={isMobileWidth ? { width: 250 } : { width: 600 }}>
                <ReactSearchAutocomplete
                    items={newArray}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    autoFocus
                />
            </div>
        </div>
    );
};

// Input.propTypes = {
//     name: PropTypes.string,
//     value: PropTypes.any,
//     label: PropTypes.string,
//     onChange: PropTypes.func,
//     errorMessage: PropTypes.string,
//     hasError: PropTypes.bool,
//     disabled: PropTypes.bool,
//     type: PropTypes.string,
//     onBlur: PropTypes.func,
//     classes: PropTypes.object,
// };

export default Input;
