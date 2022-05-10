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
import HealthList from '../../assets/icons/life-bar.png';
import Health from '../../assets/icons/health.png';

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
      {/* <h4>Saving Throws</h4>
      <div className="throws">
        <div className="throws__div">
          <div>
            <input type="checkbox" id="force" name="throws" value="force" />
            <label htmlFor="force">Force</label>
          </div>
          <div>
            <input type="checkbox" id="constitution" name="throws" value="constitution" />
            <label htmlFor="constitution">Constitution</label>
          </div>
        </div>
        <div className="throws__div">
          <div>
            <input type="checkbox" id="volonté" name="throws" value="volonté" />
            <label htmlFor="volonté">Volonté</label>
          </div>
          <div>
            <input type="checkbox" id="intelligence" name="throws" value="intelligence" />
            <label htmlFor="intelligence">Intelligence</label>
          </div>
        </div>
        <div className="throws__div">
          <div>
            <input type="checkbox" id="charisme" name="throws" value="charisme" />
            <label htmlFor="charisme">Charisme</label>
          </div>
          <div>
            <input type="checkbox" id="dextérité" name="throws" value="dextérité" />
            <label htmlFor="dextérité">Dextérité</label>
          </div>
        </div>
      </div> */}
      <section className="caracteristics__attack">
        <h4>Attaques et sorts</h4>
      </section>
      <section className="caracteristics__equipment">
        <h4>Equipement</h4>
      </section>
      <section className="caracteristics__traits">
        <h4>Fonction et traits</h4>
      </section>
      <section className="caracteristics__capacities">
        <h4>Liste des capacités</h4>
        <div className="caracteristics__capacities--checkbox">
          <div className="capacities">
            <div>
              <input type="checkbox" id="acrobaties" name="throws" value="acrobaties" />
              <label htmlFor="acrobaties">Acrobaties</label>
            </div>
            <div>
              <input type="checkbox" id="pet" name="throws" value="pet" />
              <label htmlFor="pet">Animal de compagnie</label>
            </div>
            <div>
              <input type="checkbox" id="arcane" name="throws" value="arcane" />
              <label htmlFor="arcane">Arcane</label>
            </div>
            <div>
              <input type="checkbox" id="athletisme" name="throws" value="athletisme" />
              <label htmlFor="athletisme">Athlétisme</label>
            </div>
            <div>
              <input type="checkbox" id="deception" name="throws" value="deception" />
              <label htmlFor="deception">Déception</label>
            </div>
            <div>
              <input type="checkbox" id="history" name="throws" value="history" />
              <label htmlFor="history">Histoire</label>
            </div>
            <div>
              <input type="checkbox" id="perspicacity" name="throws" value="perspicacity" />
              <label htmlFor="perspicacity">Perspicacité</label>
            </div>
            <div>
              <input type="checkbox" id="intimidation" name="throws" value="intimidation" />
              <label htmlFor="intimidation">Intimidation</label>
            </div>
            <div>
              <input type="checkbox" id="trick" name="throws" value="trick" />
              <label htmlFor="trick">Tour de passe-passe</label>
            </div>
          </div>
          <div className="capacities">
            <div>
              <input type="checkbox" id="nature" name="throws" value="nature" />
              <label htmlFor="nature">Nature</label>
            </div>
            <div>
              <input type="checkbox" id="perception" name="throws" value="perception" />
              <label htmlFor="perception">Perception</label>
            </div>
            <div>
              <input type="checkbox" id="performance" name="throws" value="performance" />
              <label htmlFor="performance">Performance</label>
            </div>
            <div>
              <input type="checkbox" id="persuasion" name="throws" value="persuasion" />
              <label htmlFor="persuasion">Persuasion</label>
            </div>
            <div>
              <input type="checkbox" id="religion" name="throws" value="religion" />
              <label htmlFor="religion">Religion</label>
            </div>
            <div>
              <input type="checkbox" id="vol" name="throws" value="vol" />
              <label htmlFor="vol">Vol</label>
            </div>
            <div>
              <input type="checkbox" id="survie" name="throws" value="survie" />
              <label htmlFor="survie">Survie</label>
            </div>
            <div>
              <input type="checkbox" id="investigation" name="throws" value="investigation" />
              <label htmlFor="investigation">Investigation</label>
            </div>
            <div>
              <input type="checkbox" id="medecine" name="throws" value="medecine" />
              <label htmlFor="medecine">Médecine</label>
            </div>
          </div>
        </div>
      </section>
      <section className="caracteristics__language">
        <h4>Autre compétence et  languages</h4>
      </section>
    </main>
  );
}

// == Export
export default Creator;
