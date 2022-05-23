import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRaces, saveCurrentRace } from '../../../actions/races';
import { fetchClasses } from '../../../actions/classes';
import {
  setName,
  saveSubraceCurrentId, saveClasseCurrentId, fetchRaceCreator, saveCurrentId, fetchSubraceCreator,
  fetchCurrentClasseAbilities,
  fetchCurrentClasseCreator,
  fetchBackgroundCreator,
  saveCurrentBackgroundId,
  fetchCurrentBackgroundCreator,
} from '../../../actions/character';
// == Import: local
import './characterChoices.scss';

// == Composant

function CharacterChoices() {
  const listRaces = useSelector((state) => state.races.races);
  const listClasses = useSelector((state) => state.classes.classes);
  const valueName = useSelector((state) => state.character.name);
  const raceName = useSelector((state) => state.character.currentRace.name);
  const classeName = useSelector((state) => state.character.currentClasse.name);
  const subracesList = useSelector((state) => state.character.currentRace.subraces);
  const backgroundList = useSelector((state) => state.character.backgroundList);
  const backgroundName = useSelector((state) => state.character.currentBackground.name);
  const currentClasseImage = useSelector((state) => state.character.currentClasse.image);
  const currentMorality = useSelector((state) => state.character.morality);
  const currentAlignement = useSelector((state) => state.character.alignement);
  const dispatch = useDispatch();
  // Fonction qui déclenche l'action de sauvegarde champ du Nom de personnage
  function handleChangeName(evt) {
    dispatch(setName(evt.target.value));
  }
  // Fonction  qui déclenche l'action de Sauvegarde du choix de la race dans le state
  function handleRaceChoice(evt) {
    // dispatch(setRace(evt.target.value));
    dispatch(saveCurrentId(evt.target.value));
    dispatch(fetchRaceCreator(evt.target.value));
  }

  function handleSubraceChoice(evt) {
    dispatch(saveSubraceCurrentId(evt.target.value));
    dispatch(fetchSubraceCreator(evt.target.value));
  }

  function handleClasseChoice(evt) {
    dispatch(saveClasseCurrentId(evt.target.value));
    dispatch(fetchCurrentClasseCreator(evt.target.value));
    dispatch(fetchCurrentClasseAbilities(evt.target.value));
  }
  function handleBackgroundChoice(evt) {
    dispatch(saveCurrentBackgroundId(evt.target.value));
    dispatch(fetchCurrentBackgroundCreator(evt.target.value));
  }
  useEffect(
    () => {
      dispatch(fetchRaces());
      dispatch(fetchClasses());
      dispatch(fetchBackgroundCreator());
    },
    [],
  );

  return (
    <div className="choices">
      <h2 className="choices__main--title">Création de personnages</h2>
      <input
        className="choices__name"
        type="text"
        placeholder="Nom du personnage"
        // Champ du nom du personnage  sauvegarder dans le state
        onChange={handleChangeName}
        value={valueName}
      />
      <label className="choices__label" htmlFor="choices-race">
        <select
          className="choices__race"
          id="choices-race"
          onChange={handleRaceChoice}
        >
          <option value="">Choix de la race</option>
          {listRaces && listRaces.map((race) => (
            <option
              id={race.id}
              key={race.name}
              value={race.id}
            >{race.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="choices-subrace" className="choices__label">
        <select
          className="choices__subrace"
          onChange={handleSubraceChoice}
        >
          <option value="">Choix de la sous-race</option>
          {subracesList && subracesList.map((subrace) => (
            <option key={subrace.id} value={subrace.id}>{subrace.name}</option>
          ))}
        </select>
      </label>

      <label htmlFor="choices__classe" className="choices__label">
        <select className="choices__classe" onChange={handleClasseChoice}>
          <option value="">Choix de la classe</option>
          {listClasses && listClasses.map((classe) => (
            <option key={classe.id} value={classe.id}>{classe.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="choices__background" className="choices__label">
        <select className="choices__background" onChange={handleBackgroundChoice}>
          <option value="">Choix du vécus</option>
          {backgroundList.map((background) => (
            <option key={background.id} value={background.id}>{background.name}</option>
          ))}
        </select>

      </label>
      <div className="choices__results">
        <ul className="choices__results--list">
          <li>Nom du joueur:<span className="choices__results--list--item--span">{valueName}</span></li>
          <li>Classe:<span className="choices__results--list--item--span">{classeName}</span></li>
          <li>Race:<span className="choices__results--list--item--span"> {raceName}</span></li>
          <li>Background:<span className="choices__results--list--item--span">{backgroundName}</span></li>
          <li>Alignement:<span className="choices__results--list--item--span"> {currentMorality}-{currentAlignement}</span></li>
          <li>Points d'experience: 0</li>
        </ul>
        <img src={`data:image/png;base64,${currentClasseImage}`} alt="" className="choices__results--img" />
      </div>
    </div>
  );
}

// == Export
export default CharacterChoices;
