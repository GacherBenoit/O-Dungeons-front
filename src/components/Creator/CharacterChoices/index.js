import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRaces } from '../../../actions/races';
import { fetchClasses } from '../../../actions/classes';
import { setName } from '../../../actions/character';
// == Import: local
import './characterChoices.scss';
import warrior from '../../../assets/images/guerriertransparent.png';

// == Composant

function CharacterChoices() {
  const listRaces = useSelector((state) => state.races.races);
  const listClasses = useSelector((state) => state.classes.classes);
  const valueName = useSelector((state) => state.character.name);
  const dispatch = useDispatch();

  function handleChangeName(evt) {
    dispatch(setName(evt.target.value));
  }

  useEffect(
    () => {
      dispatch(fetchRaces());
      dispatch(fetchClasses());
    },
    [],
  );
  console.log(listClasses);
  return (
    <div className="choices">
      <h3>Character Choices</h3>
      <input
        type="text"
        placeholder="Nom du personnage"
        onChange={handleChangeName}
        value={valueName}
      />
      <label>
        <select className="choices__race" id="choices-race">
          <option value="">Choix de race</option>
          {listRaces && listRaces.map((race) => (
            <option key={race.id} value={race.name}>{race.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="choices-subrace" />
      <select className="choices__subraces">
        <option value="">Choix de la sous-race</option>
        <option value="human">Humain</option>
        <option value="woodElf">Elfe des bois</option>
        <option value="dwarfOfTheMountain">Nain des montagnes</option>
      </select>
      <label htmlFor="choices__classe" />
      <select className="choices__classe">
        <option value="">Choix de la classe</option>
        {listClasses && listClasses.map((classe) => (
          <option key={classe.id} value={classe.name}>{classe.name}</option>
        ))}
      </select>
      <div className="choices__results">
        <ul className="choices__results--list">
          <li>Classe: Guerrier</li>
          <li>Race: Humain</li>
          <li>Background: Hors-la-loi</li>
          <li>Alignement: Neutre</li>
          <li>Nom du joueur:{valueName}</li>
          <li>Points d'experience: 0</li>
        </ul>
        <img src={warrior} alt="barabre" className="choices__results--img" />
      </div>
    </div>
  );
}

// == Export
export default CharacterChoices;
