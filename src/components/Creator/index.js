// == Import: local
import './creator.scss';
import CharacterChoices from './CharacterChoices';
import CaracteristicsPrincipals from './CaracteristicsPrincipals';
import Inspiration from './Inspiration';
import Personality from './Personality';
import Throws from './Throws';

// == Composant

// == Icons
import ArmorIcon from '../../assets/icons/armor.png';
import InitiativeIcon from '../../assets/icons/initiative.png';
import SpeedIcon from '../../assets/icons/speed.png';
import Health from '../../assets/icons/health.png';
import Equipment from './Equipment';
import Traits from './Traits';
import Capacities from './Capacities';
import Languages from './Languages';

function Creator() {
  return (
    <main className="creator">
      <h2>Création de personnages</h2>
      <CharacterChoices />
      <section className="statistics">
        <ul className="stats__list">
          <li className="stats__armor"><img className="stats__icon" src={ArmorIcon} alt="armor-icon" /><span>21</span>Armure </li>
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
          <li><span className="dice__type">1D8</span></li>
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
      <CaracteristicsPrincipals />
      <Inspiration />
      <Personality />
      <Throws />
      <section className="caracteristics__attack">
        <h4>Attaques et sorts</h4>
      </section>
      <Equipment />
      <Traits />
      <Capacities />
      <Languages />
    </main>
  );
}

// == Export
export default Creator;
