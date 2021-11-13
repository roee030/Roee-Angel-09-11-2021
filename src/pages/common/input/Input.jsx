import React, { useEffect } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import useBreakpoints from 'utils/hooks/useBreakpoints';
import useAlerts from 'utils/hooks/useAlerts';
import { useDispatch, useSelector } from 'react-redux';
import allActions from 'redux/actions';
import UseAutocomplete from '../autoComplete/UseAutoComplete';

const Input = () => {
    const { isMobileWidth } = useBreakpoints();
    const { inputError, generalError } = useAlerts();
    const dispatch = useDispatch();
    const results = useSelector((state) => state.searchResults.results);
    const error = useSelector((state) => state.searchResults.error);
    const newArray = results.map(a => ({ ...a }));
    const handleOnSearch = async (input) => {
        if (!/^[a-zA-Z  -]*$/.test(input)) {
            inputError();
            return;
        }
        if (input.trim().length === 0) {
            return;
        }
        dispatch(allActions.autoCompleteDataSearch(input));
    };

    const handleOnSelect = (location) => {
        dispatch(allActions.getWeatherData(location));
    };

    useEffect(() => {
        if (error) {
            generalError(error?.request?.statusText);
        }
    }, [error, generalError]);

    return (
        <div className={clsx(styles.root)}>
            <div style={isMobileWidth ? { width: 250 } : { width: 600 }}>
                <UseAutocomplete items={newArray} handleOnSelect={handleOnSelect} handleSearch={handleOnSearch} />
            </div>
        </div>
    );
};

export default Input;
