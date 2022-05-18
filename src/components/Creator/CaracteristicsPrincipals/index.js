import { useDispatch, useSelector } from 'react-redux';
import {
  saveCharismaDice,
  saveConstitutionDice, saveDexterityDice, saveIntelligenceDice, saveStrengthDice, saveWisdomDice,
} from '../../../actions/character';
import throwDice from '../../../selectors/dice';
// import DiceButton from '../DiceButton';
import './caracteristics.scss';

function CaracteristicsPrincipals() {
  // Récupération des caractéristiques de la sous-race depuis le state
  const caracteristics = useSelector((state) => state.character.currentSubrace);

  const dexterityDiceResult = useSelector((state) => state.character.dexterityDice);
  const strengthDiceResult = useSelector((state) => state.character.strenghtDice);
  const constitutionDiceResult = useSelector((state) => state.character.constitutionDice);
  const intelligenceDiceResult = useSelector((state) => state.character.intelligenceDice);
  const wisdomDiceResult = useSelector((state) => state.character.wisdomDice);
  const charismaDiceResult = useSelector((state) => state.character.charismaDice);
  console.log(dexterityDiceResult);
  const dispatch = useDispatch();

  function dexterityDice() {
    const diceResult = throwDice();
    dispatch(saveDexterityDice(diceResult));
  }
  function strengthDice() {
    const diceResult = throwDice();
    dispatch(saveStrengthDice(diceResult));
  }

  function constitutionhDice() {
    const diceResult = throwDice();
    dispatch(saveConstitutionDice(diceResult));
  }

  function intelligenceDice() {
    const diceResult = throwDice();
    dispatch(saveIntelligenceDice(diceResult));
  }

  function wisdomDice() {
    const diceResult = throwDice();
    dispatch(saveWisdomDice(diceResult));
  }

  function charismaDice() {
    const diceResult = throwDice();
    dispatch(saveCharismaDice(diceResult));
  }
  return (

    <section className="caracteristics__principals">
      <h4 className="caracteristics__principals--title">Caractéristiques principales avec bonus selon le choix de la classe:</h4>
      <ul className="caracteristics__principals--list">
        <li className="caracteristics__principals--list--item">-Force: {caracteristics.strength} + {strengthDiceResult}
          <button
            type="button"
            onClick={strengthDice}
          >
            lancer de dé
          </button>
        </li>
        <li className="caracteristics__principals--list--item">-Dextérité: {caracteristics.dexterity} + {dexterityDiceResult}
          <button
            type="button"
            onClick={dexterityDice}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Constitution: {caracteristics.constitution} + {constitutionDiceResult}
          <button
            type="button"
            onClick={constitutionhDice}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Intelligence: {caracteristics.intelligence} + {intelligenceDiceResult}
          <button
            type="button"
            onClick={intelligenceDice}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Volonté: {caracteristics.wisdom} + {wisdomDiceResult}
          <button
            type="button"
            onClick={wisdomDice}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Charisme: {caracteristics.charisma} + {charismaDiceResult}
          <button
            type="button"
            onClick={charismaDice}
          >
            lancer de dé
          </button>

        </li>
      </ul>
    </section>
  );
}

export default CaracteristicsPrincipals;
