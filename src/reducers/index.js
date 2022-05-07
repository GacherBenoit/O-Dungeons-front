import {} from '../actions';

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
    default:
      return state;
  }
}

export default mainReducer;
