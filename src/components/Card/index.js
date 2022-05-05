import './card.scss';

import barbarianImage from 'src/assets/images/barbarian.jpg';

function Card() {
  return (
    <aside className="card">
      <h3 className="card__title">Title</h3>
      <img className="card__img" src={barbarianImage} alt="barbare" />
      <p className="card__excerpt">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rerum praesentium sint quam,
        reiciendis atque reprehenderit unde cumque impedit! Nam quas at veritatis quae sit 
        odit illo architecto quaerat alias modi.
      </p>
      <p className="card__link"><a>en savoir plus...</a></p>
    </aside>
  );
}

export default Card;
