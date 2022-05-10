import './personality.scss';

function Personality() {
  return (
    <div className="personality">
      <h4 className="personality__title">Personnalité du personnage</h4>
      <ul className="personality__list">
        <li className="personality__list--item">Trait de personnalité :</li>
        <li className="personality__list--item">Idéaux :</li>
        <li className="personality__list--item">Obligations :</li>
        <li className="personality__list--item">Défauts :</li>
      </ul>
    </div>

  );
}

export default Personality;
