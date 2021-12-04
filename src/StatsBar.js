import React from 'react';
import { makeStyles } from '@mui/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => {
    const baseAdjustmentStyles = {
        '&.MuiLinearProgress-root': {
            height: 30,
            width: '100%',
        },
        '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: theme.palette.primary.main,
        },
        '& .MuiLinearProgress-dashedColorPrimary': {
            backgroundImage: `radial-gradient(${theme.palette.common.black} 0%, ${theme.palette.common.black} 0%, transparent 0%)`,
        },
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.common.white,
        },
    };

    return {
        bar: {
            marginBottom: theme.spacing(2),
        },
        positiveAdjustment: {
            ...baseAdjustmentStyles,
            '&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)': {
                backgroundColor: theme.palette.success.main,
            },
            '& .MuiLinearProgress-colorPrimary': {
                backgroundColor: theme.palette.success.main,
            },
        },
        negativeAdjustment: {
            ...baseAdjustmentStyles,
            '&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)': {
                backgroundColor: theme.palette.error.main,
            },
            '& .MuiLinearProgress-colorPrimary': {
                backgroundColor: theme.palette.error.main,
            },
        },
    };
});

const StatsBar = ({ statName, baseStat, adjustment }) => {
    const classes = useStyles();
    let value = baseStat;
    let valueBuffer = baseStat + adjustment;

    if (adjustment < 0) {
        value = baseStat + adjustment;
        valueBuffer = baseStat;
    }

    return (
        <>
            {statName}
            <LinearProgress
                className={classes.bar}
                classes={{
                    root: adjustment < 0 ? classes.negativeAdjustment : classes.positiveAdjustment,
                }}
                variant="buffer"
                color="primary"
                value={value}
                valueBuffer={valueBuffer}
            />
        </>
    );
};

StatsBar.propTypes = {
    statName: PropTypes.any,
    baseStat: PropTypes.any,
    adjustment: PropTypes.any,
};

export default StatsBar;
