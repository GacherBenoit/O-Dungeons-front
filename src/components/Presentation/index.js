// ==npm
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import mainImage from 'src/assets/images/wood-g1d44fdfb5_640.jpg';
import { NavLink } from 'react-router-dom';

import { randomRaces } from '../../actions/races';
import { randomClasse } from '../../actions/classes';

import Card from '../Card';

import './presentation.scss';

function Presentation() {
  const randomRace = useSelector((state) => state.races.randomRace);
  const randomClasses = useSelector((state) => state.classes.randomClasse);
  const burgerMeniIsOn = useSelector((state) => state.user.settingsMenu.isOpen);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(randomRaces());
      dispatch(randomClasse());
    },
    [],
  );
  // console.log(randomRace);
  // console.log(randomClasses);

  return (
    <main className="main">
      <div className="main__sections">
        <section className={burgerMeniIsOn ? 'main__section--presentation--right' : 'main__section--presentation'}>
          <img className="main__image" src={mainImage} alt="soldat" />
          <h2 className="main__section--presentation--title">
            Présentation
          </h2>
          <p className="main__section--presentation--paragraphe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed neque nulla, volutpat at dui quis, consectetur mattis arcu.
            Vivamus quis lectus dui.
            Al Nunc auctor neque sed est pellentesque, a ultricies elit porttitor.
            Pellentesque semper pharetra urna id finibus.
            Nullam sed mollis sem.
            Ut leo est, viverra a quam quis, accumsan placerat massa.
            Morbi vitae elit nisl.
            In nec erat eget tortor accumsan imperdiet non commodo orci.
            Quisque sem dolor, euismod sit amet ultrices a, bibendum a odio.
            Nam lacinia interdum lorem, id suscipit purus mollis eu.
            Mauris non tincidunt nisl, ut interdum risus. Mauris nibh elit, pharetra
            quis vulputate id, volutpat eu libero. Pellentesque id porttitor diam. Aliquam
            aliquet dignissim ante. Donec auctor sem dapibus sapien finibus, eget cursus neque
            vestibulum. Sed mollis efficitur dui, at suscipit lectus. Mauris mollis aliquam
            interdum. Maecenas eu nunc tempus, dictum lorem sit amet, viverra enim. Mauris laoreet.
          </p>
          <div className="main__section--presentation--link--contener">
            <NavLink className="main__section--presentation--link" to="/regles-et-univers"> En savoir plus....</NavLink>
          </div>
        </section>
        <section className="main__rules">
          <h2 className="main__rules--title">
            Règles du jeu
          </h2>
          <p className="main__rules--paragraphe">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum praesentium sint quam,
            reiciendis atque reprehenderit unde cumque impedit! Nam quas at veritatis quae sit
            odit illo architecto quaerat alias modi.
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum praesentium sint quam,
            reiciendis atque reprehenderit unde cumque impedit! Nam quas at veritatis quae sit
            odit illo architecto quaerat alias modi.
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum praesentium sint quam,
            reiciendis atque reprehenderit unde cumque impedit! Nam quas at veritatis quae sit
            odit illo architecto quaerat alias modi.
          </p>
          <div className="main__rules--contener">
            <NavLink className="main__section--presentation--link" to="/regles-et-univers"> En savoir plus....</NavLink>
          </div>
        </section>
      </div>
      <div className="main__random">
        <h3 className="main__random--title">
          Classes au hasard
        </h3>
        <div className="main__random--classes">
          { randomClasses.map((classeRandom) => (
            <Card
              key={classeRandom.name}
              name={classeRandom.name}
              description={classeRandom.quickDescription}
              image={classeRandom.image}
              id={classeRandom.id}
              slug={classeRandom.name}
              type="classes"
            />
          ))}
        </div>
        <h3 className="main__random--title">
          Races au hasard
        </h3>
        <div className="main__random--races">
          { randomRace.map((raceRandom) => (
            <Card
              key={raceRandom.name}
              name={raceRandom.name}
              description={raceRandom.quickDescription}
              image={raceRandom.image}
              id={raceRandom.id}
              slug={raceRandom.name}
              type="races"
            />

          ))}
          {/* <Card /> */}
        </div>
      </div>

    </main>
  );
}

export default Presentation;
