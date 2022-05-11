import { SAVE_RACES } from '../actions/races';

// State initial du site
export const initialState = {
  races: [], // On sauvegarde les races reçue dans un tableau vide
};
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RACES:
      return {
        ...state,
        races: action.races,
      };
    default:
      return state;
  }
}

export default reducer;
