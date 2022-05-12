import { combineReducers } from 'redux';

import classesReducer from './classes';
import userReducer from './user';
import racesReducer from './races';

const rootReducer = combineReducers({
  classes: classesReducer,
  user: userReducer,
  races: racesReducer,
});

export default rootReducer;
