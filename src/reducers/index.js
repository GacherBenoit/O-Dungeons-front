import { combineReducers } from 'redux';

import classesReducer from './classes';
import userReducer from './user';
import racesReducer from './races';
import characterReducer from './character';

const rootReducer = combineReducers({
  classes: classesReducer,
  user: userReducer,
  races: racesReducer,
  character: characterReducer,
});

export default rootReducer;
