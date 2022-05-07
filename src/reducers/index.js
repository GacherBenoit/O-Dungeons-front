import { MENU_BURGER_TOGGLE } from '../actions';

// State initial du site
const initialState = {
  // State concernant le menu du site en version mobile
  settingsMenu: {
    // le menu est-il ouvert
    isOpen: false,
  },
  // State concernant le champ de connexions
  settings: {
    // la valeur du champ email
    email: '',
    // la valeur du champ password
    password: '',
  },
};

function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Traduire l'action en une modification du state
    // ici lors du clic sur le menu burger
    // state.settingsMenu.isOpen passera a true ou false
    case MENU_BURGER_TOGGLE:
      return {
        ...state,
        settingsMenu: {
          ...state.settingsMenu,
          isOpen: !state.settingsMenu.isOpen,
        },
      };
    default:
      return state;
  }
}

export default mainReducer;
