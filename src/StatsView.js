import React from 'react';

import { makeStyles } from '@mui/styles';

import PropTypes from 'prop-types';
import { EMPTY_STATS, ELEMENTAL_EFFECTS } from './Constants';
import StatsBar from './StatsBar';

const useStyles = makeStyles(() => {
    return {
        container: {
            width: '100%',
            textAlign: 'left',
        },
        statBar: {
            width: '100%',
            height: 50,
        },
    };
});

const StatsView = ({ elements, baseStats }) => {
    const classes = useStyles();

    const renderStatBars = () => {
        const totalElements = Object.keys(elements)
            .map((key) => {
                return Number.isNaN(elements[key]) ? 0 : parseFloat(elements[key], 10);
            })
            .reduce((a, b) => a + b);

        const elementalAdjustments = { ...EMPTY_STATS };
        if (totalElements > 0) {
            Object.keys(elements).forEach((elementalKey) => {
                const elementalAdjustmentsPercentage = parseFloat(elements[elementalKey], 10) / totalElements;
                Object.keys(ELEMENTAL_EFFECTS[elementalKey].effects).forEach((statKey) => {
                    elementalAdjustments[statKey] += elementalAdjustmentsPercentage * ELEMENTAL_EFFECTS[elementalKey].effects[statKey];
                });
            });
        }

        return Object.keys(baseStats).map((key) => {
            const baseStat = parseFloat(baseStats[key], 10);
            // const baseStatPercentage = (baseStat / MAX_STAT_VALUE) * 100;
            // const adjustedStatPercentage = ((baseStat + elementalAdjustments[key]) / MAX_STAT_VALUE) * 100;

            return <StatsBar key={key} statName={key} className={classes.statBar} baseStat={baseStat} adjustment={elementalAdjustments[key]} />;
        });
    };

    return (
        <>
            <div className={classes.container}>{renderStatBars()}</div>
        </>
    );
};

StatsView.propTypes = {
    // elementalEffects: PropTypes.any,
    elements: PropTypes.any,
    baseStats: PropTypes.any,
};

export default StatsView;
