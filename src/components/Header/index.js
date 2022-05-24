// == Import : local
// composant
import Navbar from '../Navbar';
// css
import './header.scss';

// == Composants

function Header() {
  return (
    <header className="header">
      <div className="header__navbar--left">
        <Navbar />
      </div>
    </header>
  );
}

// == Export

export default Header;
