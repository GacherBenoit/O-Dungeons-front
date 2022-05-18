import { useDispatch, useSelector } from 'react-redux';
import { saveAlignement, saveMorality } from '../../../actions/character';
import './inspiration.scss';

function Inspiration() {
  const morality = useSelector((state) => state.character.morality);
  const alignement = useSelector((state) => state.character.alignement);
  const dispatch = useDispatch();

  function handleMoralityChoice(evt) {
    dispatch(saveMorality(evt.target.value));
  }

  function handleAlignementChoice(evt) {
    dispatch(saveAlignement(evt.target.value));
  }
  return (
    <div className="inspiration">
      <h4 className="inspiration__title">Bonus de compétence et Inspiration</h4>
      <p className="inspiration__paragraphe">
        Veuillez choisr votre moralité et votre point de vue vis-à-vis de la société de l'ordre.
      </p>
      <select
        className="inspiration__select"
        name="morality"
        id="morality"
        onChange={handleMoralityChoice}
      >
        <option value="">Moralité</option>
        <option value="bon">Bon</option>
        <option value="neutre">Neutre</option>
        <option value="mauvais">Mauvais</option>
      </select>
      <select
        className="inspiration__select"
        name="viewpoint"
        id="viewpoint"
        onChange={handleAlignementChoice}
      >
        <option value="">Point de vue</option>
        <option value="loyal">Loyal</option>
        <option value="neutre">Neutre</option>
        <option value="chaotique">Chaotique</option>
      </select>
      <p>
        Vous avez choisi d'être:
      </p>
      <p>
        {morality}-{alignement}
      </p>
      <div className="inspiration__competence">
        <p>
          Bonus de compétence :
        </p>
      </div>
    </div>
  );
}
export default Inspiration;
