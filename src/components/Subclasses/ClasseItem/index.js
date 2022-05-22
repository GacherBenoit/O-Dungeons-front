import { useSelector } from 'react-redux';

import './classeItem.scss';

function ClasseItem() {
  const currentClasse = useSelector((state) => state.classes.currentClasse);
  return (
    <div className="items">
      <h2 className="items__title">Spécificités de la classe</h2>
      <p className="items__dices">Dé de vie: <span className="items__result--span">{currentClasse.lifeDice}</span></p>
      <div className="items__armor">
        <h3 className="items__armor--title">Armure</h3>
        {(currentClasse.armors).map((armor) => (
          <div key={armor.id}>
            <p className="items__spec">Nom de l'armure:<span className="items__result--span"> {armor.name}</span></p>
            <p className="items__spec">Type d'armure : <span className="items__result--span">{armor.armorType}</span></p>
            <p className="items__spec">Classe d'armure : <span className="items__result--span">{armor.armorClass}</span></p>
            <p className="items__spec">Discrétion : <span className="items__result--span">{armor.discretion ? armor.discretion : 'aucune'}</span></p>
            <p className="items__spec">Poids : <span className="items__result--span">{armor.weight}kg</span> </p>
            <p className="items__spec">Force : <span className="items__result--span">{armor.strength}</span></p>
          </div>
        ))}
        <h3 className="items__weapon--title">Arme</h3>
        <div className="items__weapons">
          {(currentClasse.weapons).map((weapon) => (
            <div key={weapon.id}>
              <p className="items__spec">- Nom de l'arme : <span className="items__result--span">{weapon.name}</span></p>
              <p className="items__spec">Type de l'arme : <span className="items__result--span">{weapon.type}</span> </p>
              <p className="items__spec">Propriété de l'arme : <span className="items__result--span">{weapon.property}</span> </p>
              <p className="items__spec">Dé de dommages : <span className="items__result--span">{weapon.damageDice}</span> </p>
              <p className="items__spec">Type de dommages :<span className="items__result--span"> {weapon.damageType}</span> </p>
              <p className="items__spec">Poids de l'arme :<span className="items__result--span"> {weapon.weight}</span> </p>
            </div>
          ))}
        </div>
        <h3 className="items__items--title">Objets</h3>
        <div className="items__class-items">
          {(currentClasse.playableClassItems).map((item) => (
            <div key={item.item.id}>
              <p className="items__spec">- Nom de l'objet :<span className="items__result--span">{item.item.name}</span></p>
              <p className="items__spec">Quantité possédée :<span className="items__result--span"> {item.quantity}</span> </p>
              <p className="items__spec">Poids de l'objet :<span className="items__result--span">{item.item.weight}Kg</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClasseItem;
