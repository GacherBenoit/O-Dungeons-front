import PropTypes from 'prop-types';

import './card.scss';

import barbarianImage from 'src/assets/images/barbarian.jpg';

function Card({ name, description, image }) {
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
        <p className="card__body--link"><a>en savoir plus...</a></p>
      </div>

    </aside>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
