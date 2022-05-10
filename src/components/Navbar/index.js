// == Import: npm
// pour obtenir la methode dispatch du store, il faut importer useDispatch
// de react redux.
// pour connaitre le status de isOpen dans le store, il faut faire appel a useSelector
// qui est une méthode de react-redux
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

// == Import: local
import './navbar.scss';
// On importe les actions qui vont permettre la modification du state:
// state.settingsMenu.isopen
import { menuBurgerToggle } from '../../actions';

// == Composant
function Navbar() {
  const isOpen = useSelector((state) => state.settingsMenu.isOpen);

  // obtenir la méthode dispatch du store grace a useDispatch()
  const dispatch = useDispatch();

  // on reagis au clic de l'utilisateur pour afficher ou non le menu
  function handleShowLink() {
    dispatch(menuBurgerToggle());
  }

  return (
    <nav className={`navbar ${isOpen ? 'navbar__show' : 'navbar__hide'}`}>
      <ul className="navbar__links">
        <li className="navbar__item"><NavLink className="navbar__link" to="/">Accueil</NavLink></li>
        <li className="navbar__item"><NavLink className="navbar__link" to="/classes">Classes</NavLink></li>
        <li className="navbar__item"><NavLink className="navbar__link" to="/races">Races</NavLink></li>
        <li className="navbar__item"><NavLink className="navbar__link" to="/creation-personnages">Fiche personnage</NavLink></li>
        <li className="navbar__item"><NavLink className="navbar__link" to="/regles-et-univers">Règles et univers</NavLink></li>
        <li className="navbar__item"><NavLink className="navbar__link" to="/connexion">Connexion</NavLink></li>
      </ul>
      <button className="navbar__burger" type="button" onClick={handleShowLink}>
        <span className="navbar__burger--bar" />
      </button>
    </nav>
  );
}

// == Export
export default Navbar;
