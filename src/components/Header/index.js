import logo from 'src/assets/images/logo.png';
// == Composants
import Navbar from '../Navbar';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
      />
      <Navbar />
    </header>
  );
}
export default Header;
