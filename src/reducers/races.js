import { SAVE_RACES, SAVE_RANDOM_RACES } from '../actions/races';

// State initial du site
export const initialState = {
  races: [],
  randomRace: [], // On sauvegarde les races reçue dans un tableau vide
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
    default:
      return state;
  }
}

export default reducer;
