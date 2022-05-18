import {
  MENU_BURGER_TOGGLE,
  SET_EMAIL,
  SET_PASSWORD,
  SET_NEW_PASSWORD,
  PASSWORD_CHANGE,
  SAVE_USER,
  IS_LOGGED,
  MAIL_NEW_USER,
  PASSWORD_NEW_USER,
  FIRSTNAME_NEW_USER,
  LASTNAME_NEW_USER,
  SET_ID,
  LOGOUT,
} from '../actions/users';

export const initialState = {

  logged: false,
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  newpassword: '',
  token: null,
  avatar: {
    id: '',
    name: '',
    imageUrl: '',
  },
  roles: [],
  password_change: false,

  // State concernant le menu du site en version mobile
  settingsMenu: {
    // le menu est-il ouvert
    isOpen: false,
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
    case SET_ID:
      return {
        ...state,
        id: action.id,
      };
      // Avec cette action, on remplis le state email
      // avec chaque valeur que l'utilisateur tape sur son clavier
    case SET_EMAIL:
      return {
        ...state,
        email: action.value,
      };
      // Avec cette action, on remplis le state password
      // avec chaque valeur que l'utilisateur tape sur son clavier
    case SET_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    case SET_NEW_PASSWORD:
      return {
        ...state,
        newpassword: action.value,
      };
    case PASSWORD_CHANGE:
      return {
        ...state,
        password_change: true,
      };
    case SAVE_USER:
      return {
        ...state,
        ...action.user,
        // on vide le champ password
        password: '',
      };
    case IS_LOGGED:
      return {
        ...state,
        logged: true,
      };
    case MAIL_NEW_USER:
      return {
        ...state,
        email: action.value,
      };
    case PASSWORD_NEW_USER:
      return {
        ...state,
        password: action.value,
      };
    case FIRSTNAME_NEW_USER:
      return {
        ...state,
        firstName: action.value,
      };
    case LASTNAME_NEW_USER:
      return {
        ...state,
        lastName: action.value,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        avatar: {
          name: '',
          imageUrl: '',
        },
      };
    default:
      return state;
  }
}
export default reducer;
