// == Import: local
import './capacities.scss';

// == Composant

function Capacities() {
  return (
    <section className="caracteristics__capacities">
      <h4 className="caracteristics__capacities__title">Liste des capacités</h4>
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
  );
}

// == Export
export default Capacities;
