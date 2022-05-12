import { MENU_BURGER_TOGGLE, SET_EMAIL, SET_PASSWORD } from '../actions/users';

export const initialState = {
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

function reducer(state = initialState, action = {}) {
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
      // Avec cette action, on remplis le state email
      // avec chaque valeur que l'utilisateur tape sur son clavier
    case SET_EMAIL:
      return {
        ...state,
        settings: {
          ...state.settings,
          email: action.value,
        },
      };
      // Avec cette action, on remplis le state password
      // avec chaque valeur que l'utilisateur tape sur son clavier
    case SET_PASSWORD:
      return {
        ...state,
        settings: {
          ...state.settings,
          password: action.value,
        },
      };
    default:
      return state;
  }
}
export default reducer;
