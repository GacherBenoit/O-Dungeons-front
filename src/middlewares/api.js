import axios from 'axios';

import {
  FETCH_CLASSES,
  saveClasses,
  saveRandomClasse,
  RANDOM_CLASSE,
  FETCH_CLASSE_COMPLETE,
  saveCurrentClasse,
} from '../actions/classes';

import {
  FETCH_RACES,
  saveRaces,
  saveRandomRaces,
  RANDOM_RACES,
  FETCH_RACE_COMPLETE,
  saveCurrentRace,
} from '../actions/races';

import {
  LOGIN,
} from '../actions/users';

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
    case FETCH_CLASSE_COMPLETE: {
      const { classes: { currentId } } = store.getState();
      // console.log(currentId);
      axiosInstance
        .get(`classes/${currentId}`)
        .then(
          (response) => {
            store.dispatch(saveCurrentClasse(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    case FETCH_RACE_COMPLETE: {
      const { races: { currentId } } = store.getState();
      // console.log(currentId);
      axiosInstance
        .get(`races/${currentId}`)
        .then(
          (response) => {
            store.dispatch(saveCurrentRace(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user.settings;
      console.log(email);
      console.log(password);

      axiosInstance
        .post(
          'login_check',
          {
            username: email,
            password: password,
          },
        )
        .then((response) => {
          console.log(response);
        })
        .catch(() => {
          console.log('erreur');
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default apiMiddleWare;
