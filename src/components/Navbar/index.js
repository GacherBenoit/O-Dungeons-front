// == Import: npm
import { useState } from 'react';

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
      <h1 className="navbar__title">O'Dungeons</h1>
      <ul className="navbar__links">
        <li className="navbar__item"><a className="navbar__link" href="/">Accueil</a></li>
        <li className="navbar__item"><a className="navbar__link" href="/">Classes</a></li>
        <li className="navbar__item"><a className="navbar__link" href="/">Races</a></li>
        <li className="navbar__item"><a className="navbar__link" href="/">Fiche personnage</a></li>
        <li className="navbar__item"><a className="navbar__link" href="/">Règles et univers</a></li>
        <li className="navbar__item"><a className="navbar__link" href="/">Connexion</a></li>
      </ul>
      <button className="navbar__burger" type="button" onClick={handleShowLink}>
        <span className="navbar__burger--bar" />
      </button>
    </nav>
  );
}

// == Export
export default Navbar;
