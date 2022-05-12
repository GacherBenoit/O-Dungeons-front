// nopm
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// action
import { fetchRaces } from '../../actions/races';
// == Import: local
import './races.scss';

// ==components
import Card from '../Card';

function Races() {
  const listRaces = useSelector((state) => state.races.races);
  const dispatch = useDispatch();

  useEffect(
    () => {
      // je veux charger les races, je demande au store
      dispatch(fetchRaces());
    },
    [], // permet de charger une seule fois la liste
  );

  return (
    <main>
      <h1>Races</h1>
      <div className="races__cards">
        { listRaces.map((race) => (
          <Card key={race.id} name={race.name} description={race.quickDescription} image={ race.imageUrl } />
        ))}
      </div>
    </main>
  );
}
export default Races;
