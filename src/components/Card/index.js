// == Import : npm
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// == Import: local
import { fetchClasseComplete, classeCurrentId } from '../../actions/classes';
import './card.scss';

// import barbarianImage from 'src/assets/images/barbarian.jpg';

function Card({
  name, description, image, slug, id,
}) {
  const dispatch = useDispatch();

  function handleClasseClick() {
    dispatch(classeCurrentId(id));
    dispatch(fetchClasseComplete());
  }

  return (
    <aside className="card">
      <div className="card__image">
        <img className="card__image--classe" src={image} alt="barbare" />
      </div>

      <div className="card__body">
        <h3 className="card__body--title">{name}</h3>
        <p className="card__body--excerpt">
          {description}
        </p>
        <p className="card__body--link" onClick={handleClasseClick}><Link to={`/classes/${slug}`}>en savoir plus...</Link> </p>
      </div>

    </aside>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
