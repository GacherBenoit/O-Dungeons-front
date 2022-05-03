// == Import
import './home.scss';

// import mainImage from 'src/assets/images/istockphoto-491606346-612x612.jpg';
import Navbar from '../Navbar';

// == Composant
function Home() {
  return (
    <div className="home">
      <Navbar />
      <main className="main">
        <section className="main__section--presentation">
          <h2 className="main__section--presentation--title">
            Présentation
          </h2>
          <p className="main__section--presentation--paragraphe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque nulla, volutpat at dui quis, consectetur mattis arcu. Vivamus quis lectus dui. Aliquam porttitor dolor nec porttitor eleifend. Nunc auctor neque sed est pellentesque, a ultricies elit porttitor. Pellentesque semper pharetra urna id finibus. Nullam sed mollis sem. Ut leo est, viverra a quam quis, accumsan placerat massa. Morbi vitae elit nisl. In nec erat eget tortor accumsan imperdiet non commodo orci. Quisque sem dolor, euismod sit amet ultrices a, bibendum a odio. Nam lacinia interdum lorem, id suscipit purus mollis eu.

            Mauris non tincidunt nisl, ut interdum risus. Mauris nibh elit, pharetra quis vulputate id, volutpat eu libero. Pellentesque id porttitor diam. Aliquam aliquet dignissim ante. Donec auctor sem dapibus sapien finibus, eget cursus neque vestibulum. Sed mollis efficitur dui, at suscipit lectus. Mauris mollis aliquam interdum. Maecenas eu nunc tempus, dictum lorem sit amet, viverra enim. Mauris laoreet.
          </p>
          <a className="main__section--presentation--link" src="">En savoir plus....</a>
        </section>
        <section className="main__regles">
          <h2 className="main__regles--title">
            Règles du jeu
          </h2>
          <p className="main__regles--paragraphe">
            lorem 250
          </p>
          <a className="main__regles--paragraphe--link">Découvrir les règles ...</a>
        </section>
        <aside className="aside__classes">
          <h3 className="aside__classes--title">
            classes au  hasard
          </h3>
          <img className="aside__classes--img" src="" alt=" classe au hasard" />
          <img className="aside__classes--img" src="" alt=" classe au hasard" />
        </aside>
        <aside className="aside__races">
          <h3 className="aside__races--title">
            races au  hasard
          </h3>
          <img className="aside__races--img" src="" alt="race au hasard" />
          <img className="aside__races--img" src="" alt="race au hasard" />
        </aside>
      </main>

      <footer className="footer">
        <ul className="footer__list">
          <li>Mentions légales</li>
          <li>Qui sommes-nous?</li>
        </ul>
      </footer>
    </div>
  );
}

// == Export
export default Home;
