import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MIN_STAT_VALUE, MAX_STAT_VALUE } from './Constants';

import StatsView from './StatsView';

const baseStats = { bulletVelocity: 50.0, fireRate: 32.5, recoil: 68.0, handling: 61.0, movement: 19.0, reload: 55.0 };
const baseElements = { fire: 0, ice: 0, earth: 0, fusion: 0, poison: 0, wind: 0 };

const useStyles = makeStyles((theme) => {
    return {
        grid: {
            height: '100vh',
        },
        paper: {
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2),
            width: `calc(100% - ${theme.spacing(4)})`,
        },
        button: {
            margin: theme.spacing(4),
        },
        leftBox: {
            margin: theme.spacing(2),
            width: `calc((100% - 10em) - ${theme.spacing(4)})`,
            [theme.breakpoints.down('md')]: {
                width: `calc(100% - ${theme.spacing(4)})`,
            },
            display: 'inline-block',
        },
        rightBox: {
            margin: theme.spacing(2),
            width: `calc(10em - ${theme.spacing(4)})`,
            [theme.breakpoints.down('md')]: {
                width: `calc(100% - ${theme.spacing(4)})`,
            },
            display: 'inline-block',
        },
        input: {
            width: '100%',
        },
    };
});

const rand = (min, max) => {
    const min2 = Math.ceil(min);
    const max2 = Math.floor(max);
    return Math.floor(Math.random() * (max2 - min2 + 1) + min2, 2);
};

const App = () => {
    const classes = useStyles();
    const [state, setState] = useState({ elements: { ...baseElements }, baseStats: { ...baseStats } });

    const onElementChange = (e) => {
        setState({ ...state, elements: { ...state.elements, [e.target.name]: e.target.value } });
    };

    const randomizeElements = () => {
        const weight = 15;
        setState({
            ...state,
            elements: {
                fire: rand(0, 30) > weight ? rand(0, 30) : 0,
                ice: rand(0, 30) > weight ? rand(0, 30) : 0,
                earth: rand(0, 30) > weight ? rand(0, 30) : 0,
                fusion: rand(0, 30) > weight ? rand(0, 30) : 0,
                poison: rand(0, 30) > weight ? rand(0, 30) : 0,
                wind: rand(0, 30) > weight ? rand(0, 30) : 0,
            },
        });
    };
    const randomizeBaseStats = () => {
        setState({
            ...state,
            baseStats: {
                bulletVelocity: rand(MIN_STAT_VALUE, MAX_STAT_VALUE),
                fireRate: rand(MIN_STAT_VALUE, MAX_STAT_VALUE),
                recoil: rand(MIN_STAT_VALUE, MAX_STAT_VALUE),
                handling: rand(MIN_STAT_VALUE, MAX_STAT_VALUE),
                movement: rand(MIN_STAT_VALUE, MAX_STAT_VALUE),
                reload: rand(MIN_STAT_VALUE, MAX_STAT_VALUE),
            },
        });
    };

    return (
        <>
            <Paper className={classes.paper}>
                <Button
                    className={classes.button}
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        randomizeBaseStats();
                    }}
                >
                    Randomize Base Stats
                </Button>
                <Button
                    className={classes.button}
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        randomizeElements();
                    }}
                >
                    Randomize Elements
                </Button>
            </Paper>
            <Paper className={classes.paper}>
                <div className={classes.leftBox}>
                    <StatsView elements={state.elements} baseStats={state.baseStats} />
                </div>
                <div className={classes.rightBox}>
                    <TextField className={classes.input} type="number" name="fire" label="fire" value={state.elements.fire} onChange={onElementChange} />
                    <TextField className={classes.input} type="number" name="ice" label="ice" value={state.elements.ice} onChange={onElementChange} />
                    <TextField className={classes.input} type="number" name="earth" label="earth" value={state.elements.earth} onChange={onElementChange} />
                    <TextField className={classes.input} type="number" name="fusion" label="fusion" value={state.elements.fusion} onChange={onElementChange} />
                    <TextField className={classes.input} type="number" name="poison" label="poison" value={state.elements.poison} onChange={onElementChange} />
                    <TextField className={classes.input} type="number" name="wind" label="wind" value={state.elements.wind} onChange={onElementChange} />
                </div>
            </Paper>
        </>
    );
};

export default App;
