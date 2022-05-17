// == Import : npm
import { useSelector } from 'react-redux';
// == Import : local
import './logout.scss';

// == Composant

function Logout() {
  const firstname = useSelector((state) => state.user.firstName);

  function handleLogout() {

  }

  return (
    <div className="logout">
      <p className="logout__texte"> Bienvennue {firstname}</p>
      <button
        type="button"
        className="logout__button"
        onClick={handleLogout}
      >
        Se Deconnecter
      </button>
    </div>
  );
}

// == Export

export default Logout;
