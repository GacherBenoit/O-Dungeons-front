import logo from 'src/assets/images/Logo- O-Dungeons.png';
// == Composants
import Navbar from '../Navbar';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img
          className="header__logo"
          src={logo}
          alt="logo"
        />
        <h1 className="header__title">O'Dungeon</h1>
      </div>
      <Navbar />
    </header>
  );
}
export default Header;
