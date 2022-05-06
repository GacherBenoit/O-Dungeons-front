// == import: local
import { NavLink } from 'react-router-dom';

import './error.scss';
import orcsarmy from '../../assets/images/orcarmy.png';
// == Composant

function Error() {
  return (
    <main className="error">
      <h1>Oupsss ... tu es tombé dans une embuscade !!</h1>

      <button type="button"><NavLink to="/">Retour à l'accueil</NavLink></button>
      <img src={orcsarmy} alt="orcs" />
    </main>
  );
}

export default Error;
