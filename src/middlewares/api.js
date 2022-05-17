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
  LOGIN, saveUser,
} from '../actions/users';

import {
  FETCH_CURRENT_CLASSE_ABILITIES,
  FETCH_BACKGROUND_CREATOR,
  FETCH_CURRENT_CLASSE_CREATOR,
  FETCH_RACE_CREATOR,
  FETCH_SUBRACE_CREATOR,
  saveBackgroundCreator,
  saveCurrentClasseAbilities,
  saveCurrentClasseCreator,
  saveCurrentRaceCreator,
  saveCurrentSubrace,
  FETCH_CURRENT_BACKGROUND_CREATOR,
  saveCurrentBackground,
} from '../actions/character';

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
    case FETCH_BACKGROUND_CREATOR:
      axiosInstance
        .get('backgrounds')
        .then(
          (response) => {
            store.dispatch(saveBackgroundCreator(response.data));
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
    case FETCH_RACE_CREATOR: {
      const { character: { currentId } } = store.getState();
      console.log(currentId);
      axiosInstance
        .get(`races/${currentId}`)
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(saveCurrentRaceCreator(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    case FETCH_SUBRACE_CREATOR: {
      const { character: { currentSubraceId } } = store.getState();
      console.log(currentSubraceId);
      axiosInstance
        .get(`subraces/${currentSubraceId}`)
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(saveCurrentSubrace(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    case FETCH_CURRENT_CLASSE_ABILITIES: {
      const { character: { currentClasseId } } = store.getState();
      console.log(currentClasseId);
      axiosInstance
        .get(`classes/${currentClasseId}/abilities`)
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(saveCurrentClasseAbilities(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    case FETCH_CURRENT_CLASSE_CREATOR: {
      const { character: { currentClasseId } } = store.getState();
      console.log(currentClasseId);
      axiosInstance
        .get(`classes/${currentClasseId}`)
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(saveCurrentClasseCreator(response.data));
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
          store.dispatch(saveUser(response.data.user));
          store.dispatch(saveUser(response.data));
        })
        .catch(() => {
          console.log('erreur');
        });
      next(action);
      break;
    }
    case FETCH_CURRENT_BACKGROUND_CREATOR: {
      const { character: { currentBackgroundId } } = store.getState();
      axiosInstance
        .get(`backgrounds/${currentBackgroundId}`)
        .then(
          (response) => {
            store.dispatch(saveCurrentBackground(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default apiMiddleWare;
