// == Import: local
import './characterChoices.scss';
import barbarian from '../../../assets/images/barbarian.jpg';

// == Composant

function CharacterChoices() {
  return (
    <div className="choices">
      <h2>character Choices</h2>
      <input type="text" placeholder="Nom du personnage" />
      <label htmlFor="choices-race" />
      <select className="choices__race" id="choices-race">
        <option value="">Choix de race</option>
        <option value="human">Humain</option>
        <option value="orc">Orc</option>
        <option value="elf">Elfe</option>
      </select>
      <label htmlFor="choices-subrace" />
      <select className="choices__subraces">
        <option value="">Choix de la sous-race</option>
        <option value="human">Humain</option>
        <option value="woodElf">Elfe des bois</option>
        <option value="dwarfOfTheMountain">Nain des montagnes</option>
      </select>
      <label htmlFor="choices__classe" />
      <select className="choices__classe">
        <option value="">Choix de la classe</option>
        <option value="thief">Voleur</option>
        <option value="archer">Rodeur</option>
        <option value="warrior">Guerrier</option>
      </select>
      <label htmlFor="choices__subclasse" />
      <select className="Choices__sub-classe">
        <option value="">Choix de la sous-classe</option>
        <option value="assassin">assassin</option>
        <option value="barbarian">Barbare</option>
        <option value="elementalist">Mage élémentaire</option>
      </select>
      <div className="choices__results">
        <ul>
          <li>Classe: Guerrier</li>
          <li>Race: Humain</li>
          <li>Background: Hors-la-loi</li>
          <li>Alignement: Neutre</li>
          <li>Nom du joueur: Alban</li>
          <li>Points d'experience: 0</li>
        </ul>
        <img src={barbarian} alt="barabre" className="choices__results--img" />
      </div>
    </div>
  );
}

// == Export
export default CharacterChoices;
