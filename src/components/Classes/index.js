// == Import: npm
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import: local
// Composant
import Card from '../Card';
// Actions
import { fetchClasses } from '../../actions/classes';
// CSS
import './classes.scss';

// == Composant

function Classes() {
  const burgerMenuIsOn = useSelector((state) => state.user.settingsMenu.isOpen);
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
    <main className={burgerMenuIsOn ? 'classes--right' : 'classes'}>
      <h1 className="classes__title">Classes</h1>
      <div className="classes__cards">
        { classesList.map((classe) => (
          <Card
            id={classe.id}
            key={classe.name}
            name={classe.name}
            description={classe.quickDescription}
            image={classe.image}
            slug={classe.name}
            type="classes"
          />
        ))}
      </div>
    </main>
  );
}

// == Export
export default Classes;
