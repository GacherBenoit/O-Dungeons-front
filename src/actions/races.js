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
