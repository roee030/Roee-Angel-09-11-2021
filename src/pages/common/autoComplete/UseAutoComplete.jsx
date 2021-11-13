import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSoloCreateOption({ items, handleSearch, handleOnSelect }) {
    const handleSearchLocation = (event, values) => {
        if (values) {
            handleOnSelect(values);
        }
    };
    const handleSearchList = (e) => {
        handleSearch(e.target.value);

    };
    return (
        <Autocomplete
            id='weather-location'
            options={items}
            getOptionLabel={(option) =>
                ` ${option.name}`
            }
            onChange={handleSearchLocation}
            fullWidth
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='Location'
                    variant='outlined'
                    onChange={handleSearchList}
                />
            )}
        />
    );
}
