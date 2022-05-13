// ==npm
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// ==components
import Card from '../Card';
// ==Actions
import { fetchClasses } from '../../actions/classes';
// ==CSS
import './classes.scss';

function Classes() {
  const classesList = useSelector((state) => state.classes.classes);
  const dispatch = useDispatch();
  // au montage du composant principal
  useEffect(
    () => {
      // je veux charger les classes, je demande au store
      dispatch(fetchClasses());
    },
    [], // permet de charger une seule fois la liste
  );

  return (
    <main>
      <h1>Classes</h1>
      <div className="classes__cards">
        { classesList.map((classe) => (
          <Card
            id={classe.id}
            key={classe.name}
            name={classe.name}
            description={classe.quickDescription}
            image={classe.imageUrl}
            slug={classe.name}
            type="classes"
          />
        ))}
      </div>
    </main>
  );
}

export default Classes;
