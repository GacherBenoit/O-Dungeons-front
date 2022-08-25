// == Import : npm
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// == Import: local
// Action
import { fetchClasseComplete, classeCurrentId } from '../../actions/classes';
import { fetchRaceComplete, raceCurrentId } from '../../actions/races';
// Css
import './card.scss';

// == Composant

function Card({
  name, description, image, slug, id, type,
}) {
  const dispatch = useDispatch();

  function handleClasseClick() {
    dispatch(classeCurrentId(id));
    dispatch(fetchClasseComplete());
    dispatch(raceCurrentId(id));
    dispatch(fetchRaceComplete());
  }
  return (
    <aside className="card">
      <div className="card__image">
        <img className="card__image--classe" src={`data:image/png;base64,${image}`} alt="barbare" />
      </div>

      <div className="card__body">
        <h3 className="card__body--title">{name}</h3>
        <p className="card__body--excerpt">
          {description}
        </p>
        <p className="card__body--link" onClick={handleClasseClick}><Link className="card__body--know--more" to={`/${type}/${slug}`}>en savoir plus...</Link> </p>
      </div>

    </aside>
  );
}
// Validation des props
Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};

// == Export
export default Card;
