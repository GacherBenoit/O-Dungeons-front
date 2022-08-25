// == Import: npm
import { NavLink } from 'react-router-dom';

// ==  Import: local
import './footer.scss';

// == Composant

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__background">
        <ul className="footer__list">
          <li className="footer__list--item"><NavLink to="/mentions-legal">Mentions légales</NavLink></li>
          <li className="footer__list--item"><NavLink to="/qui-somme-nous">Qui sommes-nous?</NavLink></li>
        </ul>
      </div>

    </footer>
  );
}

// == Export
export default Footer;
