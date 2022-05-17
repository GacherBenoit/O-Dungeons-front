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
            -{equipment.quantity} {equipment.item.name} ayant un poids de  {equipment.item.weight}
            kg
          </li>
        ))}
        {equipmentFromBackground && equipmentFromBackground.map((equipement) => (
          <li
            key={equipement.id}
            className="equipment__list--item"
          >-{equipement.name}  ayant un poids de   {equipement.weight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;
