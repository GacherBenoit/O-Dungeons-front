import { useSelector } from 'react-redux';
import './caracteristics.scss';

function CaracteristicsPrincipals() {
  // Récupération des caractéristiques de la sous-race depuis le state
  const caracteristics = useSelector((state) => state.character.currentSubrace);
  return (
    <section className="caracteristics__principals">
      <h4 className="caracteristics__principals--title">Caractéristiques principales avec bonus selon le choix de la classe:</h4>
      <ul className="caracteristics__principals--list">
        <li className="caracteristics__principals--list--item">-Force: {caracteristics.strength}</li>
        <li className="caracteristics__principals--list--item">-Dextérité: {caracteristics.dexterity}</li>
        <li className="caracteristics__principals--list--item">-Constitution: {caracteristics.constitution}</li>
        <li className="caracteristics__principals--list--item">-Intelligence: {caracteristics.intelligence}</li>
        <li className="caracteristics__principals--list--item">-Volonté: {caracteristics.wisdom}</li>
        <li className="caracteristics__principals--list--item">-Charisme: {caracteristics.charisma}</li>
      </ul>
    </section>
  );
}

export default CaracteristicsPrincipals;
