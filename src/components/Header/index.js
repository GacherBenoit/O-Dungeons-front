// == Import : local
import Navbar from '../Navbar';
import './header.scss';

// == Composants

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">O'Dungeon</h1>
      </div>
      <div className="header__navbar--left">
        <Navbar />
      </div>
    </header>
  );
}

// == Export

export default Header;
