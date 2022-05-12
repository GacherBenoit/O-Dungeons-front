import axios from 'axios';

import {
  FETCH_CLASSES,
  saveClasses,
  saveRandomClasse,
  RANDOM_CLASSE,
} from '../actions/classes';

import {
  FETCH_RACES,
  saveRaces,
  saveRandomRaces,
  RANDOM_RACES,
} from '../actions/races';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://pierre-arnaudlandoin-server.eddi.cloud/projet-17-o-dungeons-back/public/api/',
});

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      axiosInstance
        .get('classes')
        .then(
          (response) => {
            store.dispatch(saveClasses(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action); // Si l'action type au dessus n'est pas appellé, axios passe à l'action suivante
      break;
    case FETCH_RACES:
      axiosInstance
        .get('races')
        .then(
          (response) => {
            store.dispatch(saveRaces(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    case RANDOM_RACES:
      axiosInstance
        .get('races/random')
        .then(
          (response) => {
            store.dispatch(saveRandomRaces(response.data));
          },
        )
        .catch(
          () => console.log('erreur api'),
        );
      next(action);
      break;
    case RANDOM_CLASSE:
      axiosInstance
        .get('classes/random')
        .then(
          (response) => {
            store.dispatch(saveRandomClasse(response.data));
          },
        )
        .catch(
          () => console.log('erreur api'),
        );
      next(action);
      break;
    default:
      next(action);
  }
};
export default apiMiddleWare;
