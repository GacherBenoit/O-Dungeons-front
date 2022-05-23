import { useSelector } from 'react-redux';
import './equipment.scss';

function Equipment() {
  const equipmentList = useSelector((state) => state.character.currentClasse.playableClassItems);
  const equipmentFromBackground = useSelector((state) => state.character.currentBackground.items);
  // console.log(equipmentList);
  return (
    <div className="equipment">
      <h4 className="equipment__title">
        Equipement
      </h4>
      <p className="equipment__paragraphe">
        Vous avez récupérer l'équipement suivant:
      </p>
      <ul className="equipment__list">
        {equipmentList && equipmentList.map((equipment) => (
          <li
            key={equipment.item.name}
            className="equipment__list--item"
          >
            -<span className="equipment__list--item--span">{equipment.quantity} {equipment.item.name}</span> ayant un poids de  <span className="equipment__list--item--span">{equipment.item.weight}</span>
            kg
          </li>
        ))}
        {equipmentFromBackground && equipmentFromBackground.map((equipement) => (
          <li
            key={equipement.id}
            className="equipment__list--item"
          >-<span className="equipment__list--item--span">{equipement.name}</span>  ayant un poids de   <span className="equipment__list--item--span">{equipement.weight}</span> kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;
