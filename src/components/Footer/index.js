import './footer.scss';
import backgroundFooter from 'src/assets/images/footer.jpg';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__image" src={backgroundFooter} alt="" />
      <ul className="footer__list">
        <li>Mentions légales</li>
        <li>Qui sommes-nous?</li>
      </ul>
    </footer>
  );
}

export default Footer;
