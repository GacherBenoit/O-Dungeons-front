import './statistics.scss';

import { useSelector } from 'react-redux';
// == Icons
import ArmorIcon from '../../../assets/icons/armor.png';
import InitiativeIcon from '../../../assets/icons/initiative.png';
import SpeedIcon from '../../../assets/icons/speed.png';
import Health from '../../../assets/icons/health.png';

function Statistics() {
  const armor = useSelector((state) => state.character.currentClasse.armors);
  const hitDice = useSelector((state) => state.character.currentClasse.lifeDice);
  return (

    <section className="statistics">
      <ul className="stats__list">
        <li className="stats__armor"><img className="stats__icon" src={ArmorIcon} alt="armor-icon" />
          {armor && armor.map((armorAmount) => (<span>{armorAmount.armorClass}</span>))} armure
        </li>
        <li className="stats__initiative"><img className="stats__icon" src={InitiativeIcon} alt="initiative-icon" /><span>2</span>Initiative </li>
        <li className="stats__speed"><img className="stats__icon" src={SpeedIcon} alt="speed-icon" /><span>0</span>Vitesse </li>
      </ul>
      <div className="stats__health-all-stats">
        <ul>
          <li className="stats__health--max"><img className="stats__icon" src={Health} alt="health-icon" />Points de vie max:</li>
          <li className="stats__health-current"><img className="stats__icon" src={Health} alt="health-icon" />Points de vie actuel:</li>
          <li className="stats__health-temporary"><img className="stats__icon" src={Health} alt="health-icon" />Points de vie temporaire:</li>
        </ul>
      </div>
      <ul className="stats__dice">
        <li><h5>Total:</h5> </li>
        <li><span className="dice__type">{hitDice}</span></li>
        <li>Hit Dice</li>
      </ul>
      <div className="stats__die-throw">
        <ul className="circle__success">
          <li>Succès</li>
          <li><span className="circle" /></li>
          <li><span className="circle" /></li>
          <li><span className="circle" /></li>
        </ul>
        <ul className="circle__loose">
          <li>Echec</li>
          <li><span className="circle" /></li>
          <li><span className="circle" /></li>
          <li><span className="circle" /></li>
          <li><p>Mort sauvés</p></li>
        </ul>
      </div>
    </section>
  );
}

export default Statistics;
