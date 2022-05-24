// == Import: local
// Image
import dices from '../../../assets/images/petitde.jpg';
// Css
import './diceButton.scss';

// == Composant

function DiceButton() {
  // function dice() {
  //   console.log(throwDice());
  //   const diceResult = throwDice();
  //   return diceResult;
  // }
  return (
    <p>
      <button
        type="button"
        className="caracteristics__principals--dice--button"
        // onClick={dice}
      >
        <img
          src={dices}
          alt="dé"
          className="caracteristics__principals--dice--button--dices"
        />
      </button>
    </p>
  );
}

// == Export
export default DiceButton;
