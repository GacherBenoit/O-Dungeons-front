// == Import: npm
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

// == Import: Local
import reducer from 'src/reducers';
// on importe notre middleware
import apiMiddleWare from '../middlewares/api';

// == Composant

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  applyMiddleware(apiMiddleWare),
);

const store = createStore(reducer, enhancers);

// == Export

export default store;
