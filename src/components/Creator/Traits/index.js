import './traits.scss';

function Traits() {
  return (
    <div className="traits">
      <h4 className="traits--title">Fonction et traits</h4>
      <p className="traits__paragraphe">
        Les traits correspondants à votre classe sont:
      </p>
      <ul className="traits__paragraphe--list">
        <li>augmentation de caractéristiques</li>
        <li>âge</li>
        <li>taille</li>
        <li>vitesse</li>
        <li>bravoure</li>
      </ul>
    </div>
  );
}

export default Traits;
