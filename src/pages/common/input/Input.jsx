import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import clsx from 'clsx';

const Input = ({
    onClick,
    onChange,
    classes = {},
    disabled,
}) => {
    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ];

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results);
    };


    const handleOnSelect = (item) => {
        // the item selected
        console.log(item);
    };



    const formatResult = (item) => {
        return item;
    };
    // styling,
    // The styling prop allows you to customize the
    // look of the searchbox
    // Default values:
    // {
    //   height: "44px",
    //   border: "1px solid #dfe1e5",
    //   borderRadius: "24px",
    //   backgroundColor: "white",
    //   boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
    //   hoverBackgroundColor: "#eee",
    //   color: "#212121",
    //   fontSize: "16px",
    //   fontFamily: "Arial",
    //   iconColor: "grey",
    //   lineColor: "rgb(232, 234, 237)",
    //   placeholderColor: "grey",
    //   clearIconMargin: '3px 14px 0 0',
    //   searchIconMargin: '0 0 0 16px'
    // };
    //
    // For example, if you want to change the background
    // color you can pass it in the props:
    // styling={
    //   {
    //     backgroundColor: "black"
    //   }
    // }
    return (
        <div className={clsx(styles.root, classes.root)}>
            <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}

                    onSelect={handleOnSelect}
                    autoFocus
                    formatResult={formatResult}
                />
            </div>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onBlur: PropTypes.func,
    classes: PropTypes.object,
};

export default Input;
