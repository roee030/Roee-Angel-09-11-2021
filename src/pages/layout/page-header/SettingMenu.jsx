import React from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import styles from './SettingMenu.module.scss';
import { useDispatch } from 'react-redux';
import allActions from 'redux/actions';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

let themeMode;
const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: themeMode ? '#111a1a' : '#9b9ea9',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            themeMode ? '#111a1a' : '#9b9ea9',
        boxSizing: 'border-box',
    },
}));

const SettingMenu = () => {
    const dispatch = useDispatch();
    themeMode = useSelector(state => state.theme);

    return (
        <div className={clsx({
            [styles.lightMode]: themeMode,
            [styles.darkMode]: !themeMode,
        }, styles.menuRoot)}>
            <span>Degree unit:</span>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>°C</Typography>
                <AntSwitch onChange={(e) => {
                    dispatch(allActions.degreeActions(e.target.checked));
                }} defaultChecked inputProps={{ 'montserrat': 'ant design' }} />
                <Typography>°F</Typography>
            </Stack>
            <span>Dark Mode:</span>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>On</Typography>
                <AntSwitch onChange={(e) => {
                    dispatch(allActions.themeActions(e.target.checked));
                }} defaultChecked inputProps={{ 'montserrat': 'ant design' }} />
                <Typography>Off</Typography>
            </Stack>
        </div>
    );
};

export default SettingMenu;
