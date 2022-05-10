import './inspiration.scss';

function Inspiration() {
  return (
    <div className="inspiration">
      <h4 className="inspiration__title">Bonus de compétence et Inspiration</h4>
      <p className="inspiration__paragraphe">
        Veuillez choisr votre moralité et votre point de vue vis-à-vis de la société de l'ordre.
      </p>
      <select className="inspiration__select" name="morality" id="morality">
        <option value="">Moralité</option>
        <option value="bon">Bon</option>
        <option value="neutre">Neutre</option>
        <option value="mauvais">Mauvais</option>
      </select>
      <select className="inspiration__select" name="viewpoint" id="viewpoint">
        <option value="">Point de vue</option>
        <option value="loyal">Loyal</option>
        <option value="neutre">Neutre</option>
        <option value="chaotique">Chaotique</option>
      </select>
      <p>
        Vous avez choisi d'être...
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
