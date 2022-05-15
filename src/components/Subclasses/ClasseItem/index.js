import { useSelector } from 'react-redux';

import './classeItem.scss';

function ClasseItem() {
  const currentClasse = useSelector((state) => state.classes.currentClasse);
  return (
    <div className="items">
      <h2 className="items__title">Spécificités de la classe</h2>
      <p className="items__dices">Dé de vie: {currentClasse.lifeDice}</p>
      <div className="items__armor">
        <h3>Armure</h3>
        {(currentClasse.armors).map((armor) => (
          <div key={armor.id}>
            <p>Nom de l'armure: {armor.name}</p>
            <p>Type d'armure : {armor.armorType}</p>
            <p>Classe d'armure : {armor.armorClass}</p>
            <p>Discrétion : {armor.discretion ? armor.discretion : 'aucune'}</p>
            <p>Poids : {armor.weight}kg </p>
            <p>Force : {armor.strength}</p>
          </div>
        ))}
        <h3>Arme</h3>
        <div className="items__weapons">
          {(currentClasse.weapons).map((weapon) => (
            <div key={weapon.id}>
              <p>Nom de l'arme : {weapon.name}</p>
              <p>Type de l'arme : {weapon.type} </p>
              <p>Propriété de l'arme : {weapon.property} </p>
              <p>Dé de dommages : {weapon.damageDice} </p>
              <p>Type de dommages : {weapon.damageType} </p>
              <p>Poids de l'arme : {weapon.weight} </p>
            </div>
          ))}
        </div>
        <h3>Objets</h3>
        <div className="items__class-items">
          {(currentClasse.playableClassItems).map((item) => (
            <div key={item.item.id}>
              <p>Nom de l'objet :{item.item.name}</p>
              <p>Quantité possédée : {item.quantity} </p>
              <p>Poids de l'objet :{item.item.weight}Kg</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClasseItem;
