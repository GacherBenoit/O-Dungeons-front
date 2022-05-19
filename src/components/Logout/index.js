// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './logout.scss';
import { logout } from '../../actions/users';

// == Composant

function Logout() {
  const firstname = useSelector((state) => state.user.firstName);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    console.log('click');
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
