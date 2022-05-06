// == Import: npm
import { NavLink } from 'react-router-dom';

// ==  Import: local
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li><NavLink to="/mentions-legal">Mentions légales</NavLink></li>
        <li><NavLink to="/qui-somme-nous">Qui sommes-nous?</NavLink></li>
      </ul>
    </footer>
  );
}

export default Footer;
