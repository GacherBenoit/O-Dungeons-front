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
  GET_ALL_AVATAR,
  saveAllAvatars,
  CHANGE_AVATAR,
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
  FETCH_FIRST_ABILITIES_SPECS,
  FETCH_SECOND_ABILITIES_SPECS,
  FETCH_THIRD_ABILITIES_SPECS,
  FETCH_FOURTH_ABILITIES_SPECS,
  saveCurrentFirstAbilitiesSpecs,
  saveCurrentSecondAbilitiesSpecs,
  saveCurrentThirdAbilitiesSpecs,
  saveCurrentFourthAbilitiesSpecs,
} from '../actions/character';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'https://back.odungeon.fr/api',
  // baseURL: 'http://romanlotocki-server.eddi.cloud/projet-17-o-dungeons-back/public/api',
  // baseURL: 'http://pierre-arnaud-landoin.vpnuser.lan:8080/api/',
});

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // Récupération via l'API des classes
    case FETCH_CLASSES:
      axiosInstance
        .get('classes')
        .then(
          (response) => {
            // Envoi des classes dans le state
            store.dispatch(saveClasses(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action); // Si l'action type au dessus n'est pas appellé, axios passe à l'action suivante
      break;
    // Récupération via l'API des races
    case FETCH_RACES:
      axiosInstance
        .get('races')
        .then(
          (response) => {
            // Envoi des races dans le state
            store.dispatch(saveRaces(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
      // Récupération des background via l'API
    case FETCH_BACKGROUND_CREATOR:
      axiosInstance
        .get('backgrounds')
        .then(
          (response) => {
            // Sauvegarde des background dans le state
            store.dispatch(saveBackgroundCreator(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
      // Récupération via l'API de 2 races au hasard
    case RANDOM_RACES:
      axiosInstance
        .get('races/random')
        .then(
          (response) => {
            // Sauvegarde dans le state des 2 races
            store.dispatch(saveRandomRaces(response.data));
          },
        )
        .catch(
          () => console.log('erreur api'),
        );
      next(action);
      break;
      // Récupération via l'API de 2 classes au hasard
    case RANDOM_CLASSE:
      axiosInstance
        .get('classes/random')
        .then(
          (response) => {
            // Sauvegarde des 2 classes dans le state
            store.dispatch(saveRandomClasse(response.data));
          },
        )
        .catch(
          () => console.log('erreur api'),
        );
      next(action);
      break;
      // Récupération via l'API d'une classe complète suivant son ID
    case FETCH_CLASSE_COMPLETE: {
      const { classes: { currentId } } = store.getState();
      // console.log(currentId);
      axiosInstance
        .get(`classes/${currentId}`)
        .then(
          (response) => {
            // Sauvegarde dans le state de la classe complète
            store.dispatch(saveCurrentClasse(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Récupérationd'une race complète via l'API
    case FETCH_RACE_COMPLETE: {
      const { races: { currentId } } = store.getState();
      // console.log(currentId);
      axiosInstance
        .get(`races/${currentId}`)
        .then(
          (response) => {
            // Sauvegarde de la classe complète dans le state
            store.dispatch(saveCurrentRace(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Récupération via l'API d'une race par son ID
    case FETCH_RACE_CREATOR: {
      const { character: { currentId } } = store.getState();
      // console.log(currentId);
      axiosInstance
        .get(`races/${currentId}`)
        .then(
          (response) => {
            // Sauvegarde dans le state de la classe sélectionnée
            store.dispatch(saveCurrentRaceCreator(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Récupération via l'API d'une sous-race suivant son id
    case FETCH_SUBRACE_CREATOR: {
      const { character: { currentSubraceId } } = store.getState();
      // console.log(currentSubraceId);
      axiosInstance
        .get(`subraces/${currentSubraceId}`)
        .then(
          (response) => {
            // Sauvegarde de la sous-race sélectionnée
            store.dispatch(saveCurrentSubrace(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Récupération des habilités d'une classe via l'API
    case FETCH_CURRENT_CLASSE_ABILITIES: {
      const { character: { currentClasseId } } = store.getState();
      // console.log(currentClasseId);
      axiosInstance
        .get(`classes/${currentClasseId}/abilities`)
        .then(
          (response) => {
            // Sauvegarde des habilités de la class dans le state
            store.dispatch(saveCurrentClasseAbilities(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Récupération via l'API de la classe courante
    case FETCH_CURRENT_CLASSE_CREATOR: {
      const { character: { currentClasseId } } = store.getState();
      // console.log(currentClasseId);
      axiosInstance
        .get(`classes/${currentClasseId}`)
        .then(
          (response) => {
            // Sauvegarde dans le state de la classe selectionnée
            store.dispatch(saveCurrentClasseCreator(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Envoi dans l'API le username et password  dans l'API
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
          // on extrait la propriété data de la reponse
          // que l'on stocke dans une variable user
          const { data: user } = response;

          // console.log(user);
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
    // Envoi à l'API l'utilisateur créé
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

          // console.log(user);
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
    // Récupération des données d'un utilisateur
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
          // console.log(response);

          const { data: user } = response;
          // console.log(user);

          store.dispatch(saveUser(user));
          store.dispatch(isLogged());
        })
        .catch(() => {
          console.log('erreur');
        });
      next(action);
      break;
    }
    // Vide le local storage
    case LOGOUT: {
      localStorage.clear();
      next(action);
      break;
    }
    // Envoi à l'API les modifications d'un utilisateur
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
      // console.log(state.user);
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
          // console.log(response);

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
    // Envoi à l'API le nouveau password d'un utilisateur
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
          // console.log(response);

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
    // Appel à l'API pour recevoir les informations du background selectionné
    case FETCH_CURRENT_BACKGROUND_CREATOR: {
      const { character: { currentBackgroundId } } = store.getState();
      axiosInstance
        .get(`backgrounds/${currentBackgroundId}`)
        .then(
          (response) => {
            // Sauvegarde la réponse du background selectionné dans le state
            store.dispatch(saveCurrentBackground(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Appel à l'API pour recevoir les informations de la première abilité selectionné
    case FETCH_FIRST_ABILITIES_SPECS: {
      const { character: { firstCurrentAbilitiesId } } = store.getState();
      axiosInstance
        .get(`abilities/${firstCurrentAbilitiesId}`)
        .then(
          (response) => {
            // console.log(response.data);
            // Sauvegarde la réponse de la première abilité selectionné dans le state
            store.dispatch(saveCurrentFirstAbilitiesSpecs(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Appel à l'API pour recevoir les informations de la deuxième abilité selectionné
    case FETCH_SECOND_ABILITIES_SPECS: {
      const { character: { secondCurrentAbilitiesId } } = store.getState();
      axiosInstance
        .get(`abilities/${secondCurrentAbilitiesId}`)
        .then(
          (response) => {
            // Sauvegarde la réponse de la deuxième abilité selectionné dans le state
            // console.log(response.data);
            store.dispatch(saveCurrentSecondAbilitiesSpecs(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Appel à l'API pour recevoir les informations de la troisième abilité selectionné
    case FETCH_THIRD_ABILITIES_SPECS: {
      const { character: { thirdCurrentAbilitiesId } } = store.getState();
      axiosInstance
        .get(`abilities/${thirdCurrentAbilitiesId}`)
        .then(
          (response) => {
            // Sauvegarde la réponse de la troisième abilité selectionné dans le state
            // console.log(response.data);
            store.dispatch(saveCurrentThirdAbilitiesSpecs(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Appel à l'API pour recevoir les informations de la quatrième abilité selectionné
    case FETCH_FOURTH_ABILITIES_SPECS: {
      const { character: { fourthCurrentAbilitiesId } } = store.getState();
      axiosInstance
        .get(`abilities/${fourthCurrentAbilitiesId}`)
        .then(
          (response) => {
            // console.log(response.data);
            // Sauvegarde la réponse de la quatrième abilité selectionné dans le state
            store.dispatch(saveCurrentFourthAbilitiesSpecs(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    }
    // Appel à l'API pour recevoir les informations de tout les avatars
    case GET_ALL_AVATAR: {
      axiosInstance
        .get('avatars')
        .then(
          (response) => {
            // console.log(response);
            // Sauvegarde la réponse avec toutes les informations des avatars dans le state
            store.dispatch(saveAllAvatars(response.data));
          },
        )
        .catch(
          () => console.log('erreur'),
        );
      next(action);
      break;
    }
    case CHANGE_AVATAR: {
      const findToken = localStorage.getItem('token');
      const token = JSON.parse(findToken);
      const state = store.getState();

      // Necessaire avec de passer le header en commentaire et que cela
      // fonctionne quand meme
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const {
        id,
        idnewavatar,
      } = state.user;

      axiosInstance
        .patch(
          `users/${id}/avatar`,
          /*
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        */
          {
            avatar: idnewavatar,
          },
        )
        .then((response) => {
          // console.log(response);

          const { data: user } = response;
          store.dispatch(saveUser(user));
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
