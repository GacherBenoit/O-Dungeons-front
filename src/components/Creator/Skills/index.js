// NPM

import { useSelector, useDispatch } from 'react-redux';

// Actions

import { saveCurrentFirstAbilitiesId,
  saveCurrentSecondAbilitiesId,
  saveCurrentThirdAbilitiesId,
  saveCurrentFourthAbilitiesId,
  fetchFirstAbilitiesSpecs,
  fetchSecondAbilitiesSpecs,
  fetchThirdAbilitiesSpecs,
  fetchFourthAbilitiesSpecs,
} from '../../../actions/character';

// Import CSS
import './skills.scss';

function Skills() {
  const abilitiesList = useSelector(
    (state) => state.character.currentAbilities,
  );
  const firstAbilitieSpecs = useSelector(
    (state) => state.character.firstCurrentAbilitiesSpecs,
  );
  const secondAbilitieSpecs = useSelector(
    (state) => state.character.secondCurrentAbilitiesSpecs,
  );
  const thirdAbilitieSpecs = useSelector(
    (state) => state.character.thirdCurrentAbilitiesSpecs,
  );
  const fourthAbilitieSpecs = useSelector(
    (state) => state.character.fourthCurrentAbilitiesSpecs,
  );

  const dispatch = useDispatch();

  function handleFirstAbilitiesChoice(evt) {
    dispatch(saveCurrentFirstAbilitiesId(evt.target.value));
    dispatch(fetchFirstAbilitiesSpecs(evt.target.value));
  }
  function handleSecondAbilitiesChoice(evt) {
    dispatch(saveCurrentSecondAbilitiesId(evt.target.value));
    dispatch(fetchSecondAbilitiesSpecs(evt.target.value));
  }
  function handleThirdAbilitiesChoice(evt) {
    dispatch(saveCurrentThirdAbilitiesId(evt.target.value));
    dispatch(fetchThirdAbilitiesSpecs(evt.target.value));
  }
  function handleFourthAbilitiesChoice(evt) {
    dispatch(saveCurrentFourthAbilitiesId(evt.target.value));
    dispatch(fetchFourthAbilitiesSpecs(evt.target.value));
  }

  return (
    <section className="skills">
      <div className="skills__content">
        <ul className="skills__content--properties">
          <li>Nom</li>
          <li>Temps d'incantation</li>
          <li>Portée</li>
          <li>Durée</li>
          <li>Description</li>
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
          <span className="skills__incantation_duration">{firstAbilitieSpecs.incantationTime}</span>
          <span className="skills__range">{firstAbilitieSpecs.abilityRange}</span>
          <span className="skills__duration">{firstAbilitieSpecs.duration}</span>
          <span className="skills__description">{firstAbilitieSpecs.quickDescription}</span>
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
          <span className="skills__incantation_duration">{secondAbilitieSpecs.incantationTime}</span>
          <span className="skills__range">{secondAbilitieSpecs.abilityRange}</span>
          <span className="skills__duration">{secondAbilitieSpecs.duration}</span>
          <span className="skills__description">{secondAbilitieSpecs.quickDescription}</span>
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
          <span className="skills__incantation_duration">{thirdAbilitieSpecs.incantationTime}</span>
          <span className="skills__range">{thirdAbilitieSpecs.abilityRange}</span>
          <span className="skills__duration">{thirdAbilitieSpecs.duration}</span>
          <span className="skills__description">{thirdAbilitieSpecs.quickDescription}</span>
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
          <span className="skills__incantation_duration">{fourthAbilitieSpecs.incantationTime}</span>
          <span className="skills__range">{fourthAbilitieSpecs.abilityRange}</span>
          <span className="skills__duration">{fourthAbilitieSpecs.duration}</span>
          <span className="skills__description">{fourthAbilitieSpecs.quickDescription}</span>
        </div>
      </div>
    </section>
  );
}

// == Export
export default Skills;
