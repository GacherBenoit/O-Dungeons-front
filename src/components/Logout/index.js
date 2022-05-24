// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// == Import : local
import './logout.scss';
import { logout } from '../../actions/users';

// == Composant

function Logout() {
  const firstname = useSelector((state) => state.user.firstName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Appel l'action qui va vidée tout les champ qui contienne des informations sur l'utilisateur
  // Cette action vide egalement le local storage qui contient son ID et Son token d'identification
  // qui permet de communiqué avec l'API
  function handleLogout() {
    dispatch(logout());
    // console.log('click');
    navigate('/', { replace: true });
  }

  return (
    <div className="logout">
      <p className="logout__texte"> Bienvenue {firstname}</p>
      <button
        type="button"
        className="logout__button"
        onClick={handleLogout}
      >
        Déconnexion
      </button>
    </div>
  );
}

// == Export

export default Logout;
