// == Import: npm
import { useSelector, useDispatch } from 'react-redux';

// == Import: local
// Actions
import {
  saveCurrentFirstAbilitiesId,
  saveCurrentSecondAbilitiesId,
  saveCurrentThirdAbilitiesId,
  saveCurrentFourthAbilitiesId,
  fetchFirstAbilitiesSpecs,
  fetchSecondAbilitiesSpecs,
  fetchThirdAbilitiesSpecs,
  fetchFourthAbilitiesSpecs,
} from '../../../actions/character';
// CSS
import './skills.scss';

// == Composant

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
      {/* <div className="skills__content">
        <ul className="skills__content--properties">
          <li>Temps d'incantation:</li>
          <li>Portée:</li>
          <li>Durée:</li>
          <li>Description:</li>
        </ul>
      </div> */}
      <div className="skills__choices-menu">
        <div className="skills__choices__group--one">
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
            <div className="skills__content">
              <ul className="skills__content--properties">
                <li className="skills__incantation_duration">Temps d'incantation:<p className="skills__results">{firstAbilitieSpecs.incantationTime}</p></li>
                <li className="skills__range">Portée:<p className="skills__results">{firstAbilitieSpecs.abilityRange}</p></li>
                <li className="skills__duration">Durée:<p className="skills__results">{firstAbilitieSpecs.duration}</p></li>
                <li className="skills__description">Description:<p className="skills__results">{firstAbilitieSpecs.quickDescription}</p></li>
              </ul>
            </div>
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
            <div className="skills__content">
              <ul className="skills__content--properties">
                <li className="skills__incantation_duration">Temps d'incantation: <p className="skills__results">{secondAbilitieSpecs.incantationTime}</p></li>
                <li className="skills__range">Portée:<p className="skills__results">{secondAbilitieSpecs.abilityRange}</p></li>
                <li className="skills__duration">Durée:<p className="skills__results">{secondAbilitieSpecs.duration}</p></li>
                <li className="skills__description">Description:<p className="skills__results">{secondAbilitieSpecs.quickDescription}</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills__choices__group--two">
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
            <div className="skills__content">
              <ul className="skills__content--properties">
                <li className="skills__incantation_duration">Temps d'incantation:<p className="skills__results">{thirdAbilitieSpecs.incantationTime}</p></li>
                <li className="skills__range">Portée:<p className="skills__results">{thirdAbilitieSpecs.abilityRange}</p></li>
                <li className="skills__duration">Durée:<p className="skills__results">{thirdAbilitieSpecs.duration}</p></li>
                <li className="skills__description">Description:<p className="skills__results">{thirdAbilitieSpecs.quickDescription}</p></li>
              </ul>
            </div>
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
            <div className="skills__content">
              <ul className="skills__content--properties">
                <li className="skills__incantation_duration">Temps d'incantation:<p className="skills__results">{fourthAbilitieSpecs.incantationTime}</p></li>
                <li className="skills__range">Portée:<p className="skills__results">{fourthAbilitieSpecs.abilityRange}</p></li>
                <li className="skills__duration">Durée:<p className="skills__results">{fourthAbilitieSpecs.duration}</p></li>
                <li className="skills__description">Description:<p className="skills__results">{fourthAbilitieSpecs.quickDescription}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// == Export
export default Skills;
