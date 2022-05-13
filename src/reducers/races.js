import {
  SAVE_RACES,
  SAVE_RANDOM_RACES,
  RACE_CURRENT_ID,
  FETCH_RACE_COMPLETE,
  SAVE_CURRENT_RACE,
} from '../actions/races';

// State initial du site
export const initialState = {
  races: [],
  randomRace: [], // On sauvegarde les races reçue dans un tableau vide
  currentId: null,
  currentRace: [],
  loading: false,
};
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RACES:
      return {
        ...state,
        races: action.races,
      };
    case SAVE_RANDOM_RACES:
      return {
        ...state,
        randomRace: action.race,
      };
    case RACE_CURRENT_ID:
      return {
        ...state,
        currentId: action.id,
      };
    case FETCH_RACE_COMPLETE:
      return {
        ...state,
        loading: true,
      };
    case SAVE_CURRENT_RACE:
      return {
        ...state,
        currentRace: action.currentRace,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
