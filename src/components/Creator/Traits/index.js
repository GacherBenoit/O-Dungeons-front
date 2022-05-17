import { useSelector } from 'react-redux';
import './traits.scss';

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

export default Traits;
