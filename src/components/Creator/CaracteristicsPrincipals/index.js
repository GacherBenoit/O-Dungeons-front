import { useDispatch, useSelector } from 'react-redux';
import {
  saveCharismaDice,
  saveConstitutionDice, saveDexterityDice, saveIntelligenceDice, saveStrengthDice, saveWisdomDice,
} from '../../../actions/character';
import throwDice from '../../../selectors/dice';
import sum from '../../../selectors/sum';
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
  const dispatch = useDispatch();

  function dexterityDiceHandler() {
    const diceResult = throwDice();
    dispatch(saveDexterityDice(diceResult));
  }
  function strengthDiceHandler() {
    const diceResult = throwDice();
    dispatch(saveStrengthDice(diceResult));
  }

  function constitutionhDiceHandler() {
    const diceResult = throwDice();
    dispatch(saveConstitutionDice(diceResult));
  }

  function intelligenceDiceHandler() {
    const diceResult = throwDice();
    dispatch(saveIntelligenceDice(diceResult));
  }

  function wisdomDiceHandler() {
    const diceResult = throwDice();
    dispatch(saveWisdomDice(diceResult));
  }

  function charismaDiceHandler() {
    const diceResult = throwDice();
    dispatch(saveCharismaDice(diceResult));
  }

  return (
    <section className="caracteristics__principals">
      <h4 className="caracteristics__principals--title">Caractéristiques principales avec bonus selon le choix de la classe:</h4>
      <ul className="caracteristics__principals--list">
        <li className="caracteristics__principals--list--item">-Force: {caracteristics.strength || '0'} + {strengthDiceResult || '0'} = {sum(caracteristics.strength, strengthDiceResult)}
          <button
            type="button"
            onClick={strengthDiceHandler}
          >
            lancer de dé
          </button>
        </li>
        <li className="caracteristics__principals--list--item">-Dextérité: {caracteristics.dexterity || '0' } + {dexterityDiceResult || '0'} = {sum(caracteristics.dexterity, dexterityDiceResult)}
          <button
            type="button"
            onClick={dexterityDiceHandler}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Constitution: {caracteristics.constitution || '0'} + {constitutionDiceResult || '0'} = {sum(caracteristics.constitution, constitutionDiceResult)}
          <button
            type="button"
            onClick={constitutionhDiceHandler}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Intelligence: {caracteristics.intelligence || '0'} + {intelligenceDiceResult || '0'} = {sum(caracteristics.intelligence, intelligenceDiceResult)}
          <button
            type="button"
            onClick={intelligenceDiceHandler}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Volonté: {caracteristics.wisdom || '0'} + {wisdomDiceResult || '0'} = {sum(caracteristics.wisdom, wisdomDiceResult)}
          <button
            type="button"
            onClick={wisdomDiceHandler}
          >
            lancer de dé
          </button>

        </li>
        <li className="caracteristics__principals--list--item">-Charisme: {caracteristics.charisma || '0'} + {charismaDiceResult || '0'} = {sum(caracteristics.charisma, charismaDiceResult)}
          <button
            type="button"
            onClick={charismaDiceHandler}
          >
            lancer de dé
          </button>

        </li>
      </ul>
    </section>
  );
}

export default CaracteristicsPrincipals;
