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
