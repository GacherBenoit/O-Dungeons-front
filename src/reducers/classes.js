import { SAVE_CLASSES } from '../actions/classes';

// State initial du site
export const initialState = {
  classes: [], // On sauvegarde les classes reçue dans un tableau vide
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CLASSES:
      return {
        ...state,
        classes: action.classes,
      };
    default:
      return state;
  }
};

export default reducer;
