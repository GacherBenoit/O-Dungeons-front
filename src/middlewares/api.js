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
  saveUser,
  isLogged,
  CREATE_NEW_ACCOUNT,
  FIND_USER,
  LOGOUT,
  EDIT_ACCOUNT_USER,
  EDIT_PASSWORD_USER,
  passwordChange,
} from '../actions/users';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://pierre-arnaudlandoin-server.eddi.cloud/projet-17-o-dungeons-back/public/api/',
  // baseURL: 'http://pierre-arnaud-landoin.vpnuser.lan:8080/api/',
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
      const { email, password } = state.user;

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
          // on extrait la propriété data de la reponse
          // que l'on stocke dans une variable user
          const { data: user } = response;

          console.log(user);
          store.dispatch(saveUser(user.user));
          store.dispatch(isLogged());

          // on sauvegarde l'id de l'utilisateur dans le local storage
          localStorage.setItem('id', JSON.stringify(user.user.id));
          // on sauvegarde le token dans le local storage
          localStorage.setItem('token', JSON.stringify(user.token));

          // j'enregistre mon token sur l'instance d'axios
          // axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;
          // store.dispatch(saveUser(response.data));
        })
        .catch(() => {
          console.log('erreur');
        });
      next(action);
      break;
    }
    case CREATE_NEW_ACCOUNT: {
      const state = store.getState();
      const {
        email,
        password,
        firstName,
        lastName,
      } = state.user;
      // console.log(lastName);
      axiosInstance
        .post(
          'users',
          {
            email: email,
            password: password,
            lastName: lastName,
            firstName: firstName,
          },
        )
        .then((response) => {
          // console.log(response);
          const { data: user } = response;

          console.log(user);
          store.dispatch(saveUser(user.user));
          store.dispatch(isLogged());

          // on sauvegarde l'id de l'utilisateur dans le local storage
          localStorage.setItem('id', JSON.stringify(user.user.id));
          // on sauvegarde le token dans le local storage
          localStorage.setItem('token', JSON.stringify(user.token));
        })
        .catch(() => {
          console.log('erreur');
        });
      next(action);
      break;
    }
    case FIND_USER: {
      const findId = localStorage.getItem('id');
      const idSave = JSON.parse(findId);
      const findToken = localStorage.getItem('token');
      const token = JSON.parse(findToken);
      // const state = store.getState();
      // const { id } = state.user;

      axiosInstance
        .get(
          `users/${idSave}`,
          // on envoi l'id et le header avec le token

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },

        )
        .then((response) => {
          console.log(response);

          const { data: user } = response;
          store.dispatch(saveUser(user));
          store.dispatch(isLogged());
        })
        .catch(() => {
          console.log('erreur');
        });
      next(action);
      break;
    }
    case LOGOUT: {
      localStorage.clear();
      next(action);
      break;
    }
    case EDIT_ACCOUNT_USER: {
      const findToken = localStorage.getItem('token');
      const token = JSON.parse(findToken);
      const state = store.getState();

      // Necessaire avec de passer le header en commentaire et que cela
      // fonctionne quand meme
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const {
        id,
        email,
        firstName,
        lastName,
      } = state.user;
      console.log(state.user);
      axiosInstance
        .put(
          `users/${id}`,
          /*
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          */
          {
            id: id,
            email: email,
            lastName: lastName,
            firstName: firstName,
          },
        )
        .then((response) => {
          console.log(response);

          const { data: user } = response;
          store.dispatch(saveUser(user));
          store.dispatch(isLogged());
        })
        .catch(() => {
          console.log('erreur');
        });
      next(action);
      break;
    }
    case EDIT_PASSWORD_USER: {
      const findToken = localStorage.getItem('token');
      const token = JSON.parse(findToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

      const state = store.getState();
      const { id, password, newpassword } = state.user;

      axiosInstance
        .patch(
          `users/${id}/password`,
          /*
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          */
          {
            oldPassword: password,
            newPassword: newpassword,
          },
        )
        .then((response) => {
          console.log(response);

          const { data: user } = response;
          store.dispatch(saveUser(user));
          store.dispatch(passwordChange());
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
