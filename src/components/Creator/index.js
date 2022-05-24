// == Import: local
// Css
import './creator.scss';
// Composant
import CharacterChoices from './CharacterChoices';
import Statistics from './Statistics';
import CaracteristicsPrincipals from './CaracteristicsPrincipals';
import Inspiration from './Inspiration';
import Personality from './Personality';
import Throws from './Throws';
import Skills from './Skills';
import Traits from './Traits';
import Capacities from './Capacities';
import Languages from './Languages';
// Icons
import ArmorIcon from '../../assets/icons/armor.png';
import InitiativeIcon from '../../assets/icons/initiative.png';
import SpeedIcon from '../../assets/icons/speed.png';
import Health from '../../assets/icons/health.png';
import Equipment from './Equipment';

// == Composant

function Creator() {
  return (
    <main className="creator">
      <div className="creator__choices--content">
        <div className="creator__choices--content--parchemin">
          <CharacterChoices />
          <Statistics />
          <CaracteristicsPrincipals />
          <Inspiration />
          <Personality />
          <Skills />
          <Throws />
          <Equipment />
          <Traits />
          <Capacities />
          <Languages />
        </div>
      </div>
    </main>
  );
}

// == Export
export default Creator;
