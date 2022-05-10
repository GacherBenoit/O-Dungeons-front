import './equipment.scss';

function Equipment() {
  return (
    <div className="equipment">
      <h4 className="equipment__title">
        Equipement
      </h4>
      <p className="equipment__paragraphe">
        Vous avez récupérer l'équipement suivant:
        <ul className="equipment__paragraphe--list">
          <li>- une gourde</li>
          <li>- une boussole</li>
          <li>- une torche</li>
        </ul>
      </p>
    </div>
  );
}

export default Equipment;
