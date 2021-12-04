const MIN_STAT_VALUE = 10;
const MAX_STAT_VALUE = 100;
const EMPTY_STATS = { bulletVelocity: 0, fireRate: 0, recoil: 0, handling: 0, movement: 0, reload: 0 };
const ELEMENTAL_EFFECTS = {
    fire: {
        effects: {
            bulletVelocity: 20.0,
            fireRate: -20.0,
        },
        traits: ['Hits on enemies cause burn damage'],
    },
    ice: {
        effects: {
            reload: 20.0,
            handling: -20.0,
        },
        traits: ['Hits on enemies cause delayed health regeneration'],
    },
    earth: {
        effects: {
            recoil: 20.0,
            movement: -20.0,
        },
        traits: ['Enemies that are hit are knocked back further that normal'],
    },
    fusion: {
        effects: {
            fireRate: 20.0,
            bulletVelocity: -20.0,
        },
        traits: ["This gun's fires projectiles with no bullet drop"],
    },
    poison: {
        effects: {
            handling: 20.0,
            reload: -20.0,
        },
        traits: ['Hits on enemies cause them to become poisoned - their health will temporarily be 80% of normal'],
    },
    wind: {
        effects: {
            movement: 20.0,
            recoil: -20.0,
        },
        traits: ['???'],
    },
};

export { MIN_STAT_VALUE, MAX_STAT_VALUE, EMPTY_STATS, ELEMENTAL_EFFECTS };
