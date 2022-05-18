// NPM

import { useSelector, useDispatch } from 'react-redux';

// Actions

import { saveCurrentFirstAbilitiesId,
  saveCurrentSecondAbilitiesId,
  saveCurrentThirdAbilitiesId,
  saveCurrentFourthAbilitiesId 
} from '../../../actions/character';

// Import CSS
import './skills.scss';

function Skills() {
  const abilitiesList = useSelector((state) => state.character.currentAbilities);

  const dispatch = useDispatch();

  function handleFirstAbilitiesChoice(evt) {
    dispatch(saveCurrentFirstAbilitiesId(evt.target.value));
  }
  function handleSecondAbilitiesChoice(evt) {
    dispatch(saveCurrentSecondAbilitiesId(evt.target.value));
  }
  function handleThirdAbilitiesChoice(evt) {
    dispatch(saveCurrentThirdAbilitiesId(evt.target.value));
  }
  function handleFourthAbilitiesChoice(evt) {
    dispatch(saveCurrentFourthAbilitiesId(evt.target.value));
  }

  return (
    <section className="skills">
      <div className="skills__content">
        <ul className="skills__content--properties">
          <li>Nom</li>
          <li>Temps d'incantation</li>
          <li>Portée</li>
          <li>Durée</li>
        </ul>
      </div>
      <div className="skills__choices-menu">
        <div className="skills__choices">
          <label htmlFor="choices-skill" />
          <select className="choices__skill" id="choices-skill" onChange={handleFirstAbilitiesChoice}>
            <option value="">Compétences</option>
            {abilitiesList && abilitiesList.map((abilities) => (
              <option
                key={abilities.id}
                value={abilities.id}
              >{abilities.name}
              </option>
            ))}
          </select>
          <span className="skills__incantation_duration">+5</span>
          <span className="skills__range">1D6 -Pier</span>
          <span className="skills__duration">1D6 -Pier</span>
        </div>
        <div className="skills__choices">
          <label htmlFor="choices-skill" />
          <select className="choices__skill" id="choices-skill" onChange={handleSecondAbilitiesChoice}>
            <option value="">Compétences</option>
            {abilitiesList && abilitiesList.map((abilities) => (
              <option
                key={abilities.id}
                value={abilities.id}
              >{abilities.name}
              </option>
            ))}
          </select>
          <span className="skills__bonus">+5</span>
          <span className="skills__malus">1D6 -Pier</span>
        </div>
        <div className="skills__choices">
          <label htmlFor="choices-skill" />
          <select className="choices__skill" id="choices-skill" onChange={handleThirdAbilitiesChoice}>
            <option value="">Compétences</option>
            {abilitiesList && abilitiesList.map((abilities) => (
              <option
                key={abilities.id}
                value={abilities.id}
              >{abilities.name}
              </option>
            ))}
          </select>
          <span className="skills__bonus">+5</span>
          <span className="skills__malus">1D6 -Pier</span>
        </div>
        <div className="skills__choices">
          <label htmlFor="choices-skill" />
          <select className="choices__skill" id="choices-skill" onChange={handleFourthAbilitiesChoice}>
            <option value="">Compétences</option>
            {abilitiesList && abilitiesList.map((abilities) => (
              <option
                key={abilities.id}
                value={abilities.id}
              >{abilities.name}
              </option>
            ))}
          </select>
          <span className="skills__bonus">+5</span>
          <span className="skills__malus">1D6 -Pier</span>
        </div>
      </div>
    </section>
  );
}

// == Export
export default Skills;
