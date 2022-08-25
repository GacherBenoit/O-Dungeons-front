// == Import: npm
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// == Import: local
// Image
import mainImage from 'src/assets/images/wood-g1d44fdfb5_640.jpg';
// Action
import { randomRaces } from '../../actions/races';
import { randomClasse } from '../../actions/classes';
// Composant
import Card from '../Card';
// Css
import './presentation.scss';

// == Composant

function Presentation() {
  // On recupere les infos dans le state race (info que nous envoie l'API)
  const randomRace = useSelector((state) => state.races.randomRace);
  // On recupere les infos dans le state classes (info que nous envoie l'API)
  const randomClasses = useSelector((state) => state.classes.randomClasse);
  // En mode mobile, c'est la valeur contenu dans le state user.settingsMenu.isOpen
  // qui permet d'ouvrir ou de cacher la barre de navigation lors du clic sur le
  // menu burger
  const burgerMenuIsOn = useSelector((state) => state.user.settingsMenu.isOpen);
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
      <div className={burgerMenuIsOn ? 'main__section__right' : 'main__section'}>
        <section className="main__section--presentation">
          {/* <img className="main__image" src={mainImage} alt="soldat" /> */}
          <h2 className="main__section--presentation--title">
            Presentation
          </h2>
          <p className="main__section--presentation--paragraphe">
            Donjon et Dragon est un jeu de rôle sur table.
            C'est un sous-genre du jeu de société qui se base sur le principe de narration commune :
            vouz créez une histoire à plusieurs au fil de vos actions.
            La plupart du temps les joueurs coopèrent tous ensemble
            afin d'aller jusqu'au bout d'une aventure,
            guidés par le Maître du Jeu (MJ).
          </p>
          <div className="main__section--presentation--link--contener">
            <NavLink className="main__section--presentation--link" to="/regles-et-univers"> En savoir plus....</NavLink>
          </div>
        </section>
        <section className="main__rules">
          <h2 className="main__rules--title">
            Regles du jeu
          </h2>
          <p className="main__rules--paragraphe">
            Le jeu de rôle Dungeons & Dragons baigne dans un univers de combats et de magie.
            De nombreux jeux de notre enfance sont basés sur l’immersion.
            Au même titre, Dungeons & Dragons s’appuie sur l’imagination.
            Il s'agit de détailler le château fort par une nuit de tempête
            et imaginer comment un aventurier réagirait aux défis que représente cette scène.
          </p>
          <div className="main__rules--contener">
            <NavLink className="main__section--presentation--link" to="/regles-et-univers"> En savoir plus....</NavLink>
          </div>
        </section>
      </div>
      <div className="main__random">
        <h3 className="main__random--title">
          Decouvrir une Classe
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
          Decouvrir une Race
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

// == Export
export default Presentation;
