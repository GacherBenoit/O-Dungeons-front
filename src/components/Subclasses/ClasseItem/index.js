import { useSelector } from 'react-redux';

import './classeItem.scss';

function ClasseItem() {
  const currentClasse = useSelector((state) => state.classes.currentClasse);
  return (
    <div className="items">
      <h2 className="items__title">Spécificités de la classe</h2>
      <p className="items__dices">Dé de vie: {currentClasse.lifeDice}</p>
      <div className="items__armor">
        <h3 className="items__armor--title">Armure</h3>
        {(currentClasse.armors).map((armor) => (
          <div key={armor.id}>
            <p className="items__spec">Nom de l'armure: {armor.name}</p>
            <p className="items__spec">Type d'armure : {armor.armorType}</p>
            <p className="items__spec">Classe d'armure : {armor.armorClass}</p>
            <p className="items__spec">Discrétion : {armor.discretion ? armor.discretion : 'aucune'}</p>
            <p className="items__spec">Poids : {armor.weight}kg </p>
            <p className="items__spec">Force : {armor.strength}</p>
          </div>
        ))}
        <h3 className="items__weapon--title">Arme</h3>
        <div className="items__weapons">
          {(currentClasse.weapons).map((weapon) => (
            <div key={weapon.id}>
              <p className="items__spec">Nom de l'arme : {weapon.name}</p>
              <p className="items__spec">Type de l'arme : {weapon.type} </p>
              <p className="items__spec">Propriété de l'arme : {weapon.property} </p>
              <p className="items__spec">Dé de dommages : {weapon.damageDice} </p>
              <p className="items__spec">Type de dommages : {weapon.damageType} </p>
              <p className="items__spec">Poids de l'arme : {weapon.weight} </p>
            </div>
          ))}
        </div>
        <h3 className="items__items--title">Objets</h3>
        <div className="items__class-items">
          {(currentClasse.playableClassItems).map((item) => (
            <div key={item.item.id}>
              <p className="items__spec">Nom de l'objet :{item.item.name}</p>
              <p className="items__spec">Quantité possédée : {item.quantity} </p>
              <p className="items__spec">Poids de l'objet :{item.item.weight}Kg</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClasseItem;
