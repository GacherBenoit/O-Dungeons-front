// == Import: local
import './creator.scss';

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
// == Icons
import ArmorIcon from '../../assets/icons/armor.png';
import InitiativeIcon from '../../assets/icons/initiative.png';
import SpeedIcon from '../../assets/icons/speed.png';
import Health from '../../assets/icons/health.png';
import Equipment from './Equipment';

function Creator() {
  return (
    <main className="creator">
      <h2>Création de personnages</h2>
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
    </main>
  );
}

// == Export
export default Creator;
