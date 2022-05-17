import { useSelector } from 'react-redux';
import './equipment.scss';

function Equipment() {
  const equipmentList = useSelector((state) => state.character.currentClasse.playableClassItems);
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
      </ul>
    </div>
  );
}

export default Equipment;
