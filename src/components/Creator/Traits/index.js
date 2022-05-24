// == Import: npm
import { useSelector } from 'react-redux';

// == Import: local
import './traits.scss';

// == Composant
function Traits() {
  const trait = useSelector((state) => state.character.currentSubrace.trait);
  return (
    <div className="traits">
      <h4 className="traits--title">Fonction et traits</h4>
      <p className="traits__paragraphe">
        {trait}
      </p>
    </div>
  );
}

// == Export
export default Traits;
