import { SET_NAME } from '../actions/character';

const initialState = {
  race: '',
  subrace: '',
  subclasse: '',
  name: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}

export default reducer;
