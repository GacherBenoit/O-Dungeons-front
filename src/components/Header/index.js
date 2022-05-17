// == Import : npm
import { useSelector } from 'react-redux';
// == Import : local
import Navbar from '../Navbar';
import './header.scss';
import Logout from './Logout';

// == Composants

function Header() {
  const logged = useSelector((state) => state.user.logged);
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">O'Dungeon</h1>
      </div>
      <div className="header__navbar--left">
        <Navbar />
      </div>
      {logged && (
        <div className="header__logout">
          <Logout />
        </div>
      )}
    </header>
  );
}

// == Export

export default Header;
