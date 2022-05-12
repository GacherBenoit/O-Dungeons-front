import { SAVE_CLASSES, SAVE_RANDOM_CLASSE, CLASSE_CURRENT_ID } from '../actions/classes';

// State initial du site
export const initialState = {
  classes: [], // On sauvegarde les classes reçue dans un tableau vide
  randomClasse: [],
  currentId: null,
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
    case CLASSE_CURRENT_ID:
      return {
        ...state,
        currentId: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
