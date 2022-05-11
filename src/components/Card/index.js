import PropTypes from 'prop-types';

import './card.scss';

import barbarianImage from 'src/assets/images/barbarian.jpg';

function Card({ name, description, id }) {
  return (
    <aside className="card">
      <div className="card__image">
        <img className="card__image--classe" src={barbarianImage} alt="barbare" />
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

export default Card;
