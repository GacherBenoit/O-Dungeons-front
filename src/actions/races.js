// ACTION TYPE FETCH_RACES
export const FETCH_RACES = 'FETCH_RACES';

// ACTION CREATOR fetchRaces
export const fetchRaces = () => ({
  type: FETCH_RACES,
});
// ACTION TYPE SAVE_RACES
export const SAVE_RACES = 'SAVE_RACES';

// ACTION CREATOR saveraces
export const saveRaces = (races) => ({
  type: SAVE_RACES,
  races,
});

// ACTION TYPE RANDOM_RACES
export const RANDOM_RACES = 'RANDOM_RACES';

// ACTION CREATOR randomRaces
export const randomRaces = () => ({
  type: RANDOM_RACES,
});

// ACTION TYPE SAVE_RANDOM_RACES
export const SAVE_RANDOM_RACES = 'SAVE_RANDOM_RACES';

// ACTION CREATOR randomRaces
export const saveRandomRaces = (race) => ({
  type: SAVE_RANDOM_RACES,
  race,
});
