import './card.scss';

import barbarianImage from 'src/assets/images/barbarian.jpg';

function Card() {
  return (
    <aside className="card">
      <div className="card__image">
        <img className="card__image--classe" src={barbarianImage} alt="barbare" />
      </div>

      <div className="card__body">
        <h3 className="card__body--title">Title</h3>
        <p className="card__body--excerpt">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum praesentium sint quam,
          reiciendis atque reprehenderit unde cumque impedit! Nam quas at veritatis quae sit
          odit illo architecto quaerat alias modi.
        </p>
        <p className="card__body--link"><a>en savoir plus...</a></p>
      </div>

    </aside>
  );
}

export default Card;
