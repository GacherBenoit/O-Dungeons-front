import axios from 'axios';

import { FETCH_CLASSES, saveClasses } from '../actions/classes';

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
    default:
      next(action);
  }
};
export default apiMiddleWare;
