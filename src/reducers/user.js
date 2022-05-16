import {
  MENU_BURGER_TOGGLE,
  SET_EMAIL,
  SET_PASSWORD,
  SAVE_USER,
  IS_LOGGED,
  MAIL_NEW_USER,
  PASSWORD_NEW_USER,
  FIRSTNAME_NEW_USER,
  LASTNAME_NEW_USER,
} from '../actions/users';

export const initialState = {

  logged: false,
  firstName: '',
  lastName: '',
  email: '',
  token: null,
  avatar: {
    name: '',
    imageUrl: '',
  },

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

  // State contenant les champs pour la creation de compte
  newAccount: {
    // Valeur du champ prénom
    firstName: '',
    // Valeur du champ nom
    lastName: '',
    // Valeur du champ email
    email: '',
    // Valeur du champ password
    password: '',
    // Valeur par défaut du champ avatar
    avatar: 0,
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
    case SAVE_USER:
      return {
        ...state,
        ...action.user,
      };
    case IS_LOGGED:
      return {
        ...state,
        logged: !state.user.logged,
      };
    case MAIL_NEW_USER:
      return {
        ...state,
        newAccount: {
          ...state.newAccount,
          email: action.value,
        },
      };
    case PASSWORD_NEW_USER:
      return {
        ...state,
        newAccount: {
          ...state.newAccount,
          password: action.value,
        },
      };
    case FIRSTNAME_NEW_USER:
      return {
        ...state,
        newAccount: {
          ...state.newAccount,
          firstName: action.value,
        },
      };
    case LASTNAME_NEW_USER:
      return {
        ...state,
        newAccount: {
          ...state.newAccount,
          lastName: action.value,
        },
      };
    default:
      return state;
  }
}
export default reducer;
