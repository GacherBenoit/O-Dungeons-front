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
// ACTION TYPE FETCH_BACKGROUND_CREATOR
export const FETCH_BACKGROUND_CREATOR = 'FETCH_BACKGROUND_CREATOR';

// ACTION CREATOR fetchBackgroundCreator
export const fetchBackgroundCreator = (id) => ({
  type: FETCH_BACKGROUND_CREATOR,
  id,
});
// ACTION TYPE SAVE_BACKGROUND_CREATOR
export const SAVE_BACKGROUND_CREATOR = 'SAVE_BACKGROUND_CREATOR';

// ACTION CREATOR saveBackgroundCreator
export const saveBackgroundCreator = (background) => ({
  type: SAVE_BACKGROUND_CREATOR,
  background,
});
// ACTION TYPE SAVE_CURRENT_BACKGROUND_ID
export const SAVE_CURRENT_BACKGROUND_ID = 'SAVE_CURRENT_BACKGROUND_ID';

// ACTION CREATOR saveCurrentBackgroundId
export const saveCurrentBackgroundId = (id) => ({
  type: SAVE_CURRENT_BACKGROUND_ID,
  id,
});
// ACTION TYPE FETCH_CURRENT_BACKGROUND_CREATOR
export const FETCH_CURRENT_BACKGROUND_CREATOR = 'FETCH_CURRENT_BACKGROUND_CREATOR';

// ACTION CREATOR fetchCurrentBackgroundCreator
export const fetchCurrentBackgroundCreator = (id) => ({
  type: FETCH_CURRENT_BACKGROUND_CREATOR,
  id,
});
// ACTION TYPE SAVE_CCURRENT_BACKGROUND_CREATOR
export const SAVE_CURRENT_BACKGROUND = 'SAVE_CURRENT_BACKGROUND';

// ACTION CREATOR saveCurrentbackground
export const saveCurrentBackground = (background) => ({
  type: SAVE_CURRENT_BACKGROUND,
  background,
});
// ACTION TYPE SAVE_CURRENT_FIRST_ABILITIES
export const SAVE_CURRENT_FIRST_ABILITIES_ID = 'SAVE_CURRENT_FIRST_ABILITIES_ID';

// ACTION CREATOR saveCurrentFirstAbilitiesId
export const saveCurrentFirstAbilitiesId = (id) => ({
  type: SAVE_CURRENT_FIRST_ABILITIES_ID,
  id,
});
// ACTION TYPE SAVE_CURRENT_SECOND_ABILITIES_ID
export const SAVE_CURRENT_SECOND_ABILITIES_ID = 'SAVE_CURRENT_SECOND_ABILITIES_ID';

// ACTION CREATOR saveCurrentSecondAbilitiesId
export const saveCurrentSecondAbilitiesId = (id) => ({
  type: SAVE_CURRENT_SECOND_ABILITIES_ID,
  id,
});
// ACTION TYPE SAVE_CURRENT_THIRD_ABILITIES_ID
export const SAVE_CURRENT_THIRD_ABILITIES_ID = 'SAVE_CURRENT_THIRD_ABILITIES_ID';

// ACTION CREATOR saveCurrentThirdAbilitiesId
export const saveCurrentThirdAbilitiesId = (id) => ({
  type: SAVE_CURRENT_THIRD_ABILITIES_ID,
  id,
});
// ACTION TYPE SAVE_CURRENT_FOURTH_ABILITIES_ID
export const SAVE_CURRENT_FOURTH_ABILITIES_ID = 'SAVE_CURRENT_FOURTH_ABILITIES_ID';

// ACTION CREATOR saveCurrentFourthAbilitiesId
export const saveCurrentFourthAbilitiesId = (id) => ({
  type: SAVE_CURRENT_FOURTH_ABILITIES_ID,
  id,
});
// ACTION TYPE FETCH_FIRST_ABILITIES_SPECS
export const FETCH_FIRST_ABILITIES_SPECS = 'FETCH_FIRST_ABILITIES_SPECS';

// ACTION CREATOR fetchFirstAbilitiesSpecs
export const fetchFirstAbilitiesSpecs = () => ({
  type: FETCH_FIRST_ABILITIES_SPECS,
});

// ACTION TYPE FETCH_SECOND_ABILITIES_SPECS
export const FETCH_SECOND_ABILITIES_SPECS = 'FETCH_SECOND_ABILITIES_SPECS';

// ACTION CREATOR fetcheSecondAbilitiesSpecs
export const fetchSecondAbilitiesSpecs = () => ({
  type: FETCH_SECOND_ABILITIES_SPECS,
});
// ACTION TYPE FETCH_THIRD_ABILITIES_SPECS
export const FETCH_THIRD_ABILITIES_SPECS = 'FETCH_THIRD_ABILITIES_SPECS';

// ACTION CREATOR fetchThirdAbilitiesSpecs
export const fetchThirdAbilitiesSpecs = () => ({
  type: FETCH_THIRD_ABILITIES_SPECS,
});
// ACTION TYPE FETCH_FOURTH_ABILITIES_SPECS
export const FETCH_FOURTH_ABILITIES_SPECS = 'FETCH_FOURTH_ABILITIES_SPECS';

// ACTION CREATOR fetchFourthAbilitiesSpecs
export const fetchFourthAbilitiesSpecs = () => ({
  type: FETCH_FOURTH_ABILITIES_SPECS,
});
// ACTION TYPE SAVE_CURRENT_FIRST_ABILITIES_SPECS
export const SAVE_CURRENT_FIRST_ABILITIES_SPECS = 'SAVE_CURRENT_FIRST_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentFirstAbilitiesSpecs
export const saveCurrentFirstAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_FIRST_ABILITIES_SPECS,
  abilitie,
});
// ACTION TYPE SAVE_CURRENT_SECOND_ABILITIES_SPECS
export const SAVE_CURRENT_SECOND_ABILITIES_SPECS = 'SAVE_CURRENT_SECOND_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentSecondAbilitiesSpecs
export const saveCurrentSecondAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_SECOND_ABILITIES_SPECS,
  abilitie,
});
// ACTION TYPE SAVE_CURRENT_THIRD_ABILITIES_SPECS
export const SAVE_CURRENT_THIRD_ABILITIES_SPECS = 'SAVE_CURRENT_THIRD_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentThirdAbilitiesSpecs
export const saveCurrentThirdAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_THIRD_ABILITIES_SPECS,
  abilitie,
});
// ACTION TYPE SAVE_CURRENT_FOURTH_ABILITIES_SPECS
export const SAVE_CURRENT_FOURTH_ABILITIES_SPECS = 'SAVE_CURRENT_FOURTH_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentFourthAbilitiesSpecs
export const saveCurrentFourthAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_FOURTH_ABILITIES_SPECS,
  abilitie,
});
