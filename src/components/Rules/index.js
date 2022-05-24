// == Import: npm
import { useSelector } from 'react-redux';

// == Import: local
import './rules.scss';

// == Composant

function Rules() {
  const burgerMeniIsOn = useSelector((state) => state.user.settingsMenu.isOpen);
  return (
    <main>
      <div className="rules__sections">
        <section className={burgerMeniIsOn ? 'rules__section--presentation--right' : 'rules__section--presentation'}>
          <h1 className="rules__title">Découvrez les règles et l'univers</h1>
          <h2 className="rules__paragraph__title">L'univers de Donjon et Dragon</h2>
          <p className="rules__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Velit provident cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
            celit provident cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
            Belot provident cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
            Velit cano cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
          </p>
          <h2 className="rules__paragraph__title">Les règles</h2>
          <p className="rules__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Velit provident cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
            celit provident cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
            Belot provident cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
            Velit cano cum similique labore numquam alias earum recusandae officia, exercitatio
            eum tenetur eos, quidem in doloribus quod. Nisi, asperiores.
          </p>
        </section>
      </div>
    </main>
  );
}

// == Export
export default Rules;
