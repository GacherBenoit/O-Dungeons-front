// ACTION TYPE
export const SET_NAME = 'SET_NAME';

// ACTION CREATOR
export const setName = (name) => ({
  type: SET_NAME,
  name,
});

// ACTION TYPE SET_RACE
export const SET_RACE = 'SET_RACE';

// ACTION CREATOR setRace
export const setRace = (name) => ({
  type: SET_RACE,
  name,
});

// ACTION TYPE SAVE_CURRENT_ID
export const SAVE_CURRENT_ID = 'SAVE_CURRENT_ID';

// ACTION CREATOR saveCurrentID
export const saveCurrentId = (id) => ({
  type: SAVE_CURRENT_ID,
  id,
});
// ACTION TYPE FETCH_RACES
export const FETCH_RACES = 'FETCH_RACES';

// ACTION CREATOR fetchRaces
export const fetchRaces = () => ({
  type: FETCH_RACES,
});

// ACTION TYPE SAVE_CURRENT_CLASSE
export const SAVE_CURRENT_RACE = 'SAVE_CURRENT_RACE';

// ACTION CREATOR saveCurrentRACE
export const saveCurrentRace = (currentRace) => ({
  type: SAVE_CURRENT_RACE,
  currentRace,
});
// ACTION TYPE SAVE_CLASSE_CURRENT_ID
export const SAVE_CLASSE_CURRENT_ID = 'SAVE_CLASSE_CURRENT_ID';

// ACTION CREATOR saveClasseCurrentId
export const saveClasseCurrentId = (id) => ({
  type: SAVE_CLASSE_CURRENT_ID,
  id,
});

// ACTION TYPE FETCH_RACE_CREATOR
export const FETCH_RACE_CREATOR = 'FETCH_RACE_CREATOR';

// ACTION CREATOR fetchRaceCreator
export const fetchRaceCreator = (id) => ({
  type: FETCH_RACE_CREATOR,
  id,
});
// ACTION TYPE SAVE_CURRENT_RACE_CREATOR
export const SAVE_CURRENT_RACE_CREATOR = 'SAVE_CURRENT_RACE_CREATOR';

// ACTION CREATOR saveCurrentRaceCreator
export const saveCurrentRaceCreator = (race) => ({
  type: SAVE_CURRENT_RACE_CREATOR,
  race,
});

// ACTION TYPE SAVE_SUBRACE_CURRENT_ID
export const SAVE_SUBRACE_CURRENT_ID = 'SAVE_SUBRACE_CURRENT_ID';

// ACTION CREATOR saveSubraceCurrentId
export const saveSubraceCurrentId = (id) => ({
  type: SAVE_SUBRACE_CURRENT_ID,
  id,
});

// ACTION TYPE SAVE_CURRENT_SUBRACE
export const SAVE_CURRENT_SUBRACE = 'SAVE_CURRENT_SUBRACE';

// ACTION CREATOR saveCurrentSubrace
export const saveCurrentSubrace = (subrace) => ({
  type: SAVE_CURRENT_SUBRACE,
  subrace,
});

// ACTION TYPE FETCH_SUBRACE_CREATOR
export const FETCH_SUBRACE_CREATOR = 'FETCH_SUBRACE_CREATOR';

// ACTION CREATOR fetchSubraceCreator
export const fetchSubraceCreator = (id) => ({
  type: FETCH_SUBRACE_CREATOR,
  id,
});

// ACTION TYPE FETCH_CURRENT_CLASSE_ABILITIES
export const FETCH_CURRENT_CLASSE_ABILITIES = 'FETCH_CURRENT_CLASSE_ABILITIES';

// ACTION CREATOR fetchCurrentClasseAbilities
export const fetchCurrentClasseAbilities = (abilities) => ({
  type: FETCH_CURRENT_CLASSE_ABILITIES,
  abilities,
});
// ACTION TYPE SAVE_CURRENT_CLASSE_ABILITIES
export const SAVE_CURRENT_CLASSE_ABILITIES = 'SAVE_CURRENT_CLASSE_ABILITIES';

// ACTION CREATOR saveCurrentClasseAbilities
export const saveCurrentClasseAbilities = (abilities) => ({
  type: SAVE_CURRENT_CLASSE_ABILITIES,
  abilities,
});
// ACTION TYPE FETCH_CURRENT_CLASSE_CREATOR
export const FETCH_CURRENT_CLASSE_CREATOR = 'FETCH_CURRENT_CLASSE_CREATOR';

// ACTION CREATOR fetchCurrentClasseCreator
export const fetchCurrentClasseCreator = (id) => ({
  type: FETCH_CURRENT_CLASSE_CREATOR,
  id,
});
// ACTION TYPE SAVE_CURRENT_CLASSE_CREATOR
export const SAVE_CURRENT_CLASSE_CREATOR = 'SAVE_CURRENT_CLASSE_CREATOR';

// ACTION CREATOR saveCurrentClasseCreator
export const saveCurrentClasseCreator = (classe) => ({
  type: SAVE_CURRENT_CLASSE_CREATOR,
  classe,
});