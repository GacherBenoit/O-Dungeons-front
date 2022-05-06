// == Import: npm
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// == Import: local
import './navbar.scss';

// == Composant
function Navbar() {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => {
    setShowLink(!showLink);
  };
  return (
    <nav className={`navbar ${showLink ? 'navbar__show' : 'navbar__hide'}`}>
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
