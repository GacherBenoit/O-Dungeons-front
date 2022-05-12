import { SAVE_CLASSES, SAVE_RANDOM_CLASSE } from '../actions/classes';

// State initial du site
export const initialState = {
  classes: [], // On sauvegarde les classes reçue dans un tableau vide
  randomClasse: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CLASSES:
      return {
        ...state,
        classes: action.classes,
      };
    case SAVE_RANDOM_CLASSE:
      return {
        ...state,
        randomClasse: action.classe,
      };
    default:
      return state;
  }
};

export default reducer;
