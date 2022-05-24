// == Import: npm
import { useSelector } from 'react-redux';// == Import : local

// == Import: local
// Composant
import Loading from '../Loading';
// Css
import './subraces.scss';

// == Composant
function Subraces() {
  const loading = useSelector((state) => state.races.loading);
  const currentRace = useSelector((state) => state.races.currentRace);
  const currentSubRace = useSelector((state) => state.races.currentRace.subraces);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="subraces">
      <section className="subraces__mainclass" id="subraces">
        <h2 className="subraces__mainclass--title">{currentRace.name}</h2>
        <img className="subraces__img" src={`data:image/png;base64,${currentRace.image}`} alt="race" />
        <p className="subraces__mainclass--description">
          {currentRace.fullDescription}
        </p>
      </section>
      <h2 className="subraces__title">Sous-race</h2>
      <section className="subraces__presentation">
        {currentSubRace && currentSubRace.map((subRace) => (
          <div key={subRace.id} className="subraces__presentation--card">
            <h3 className="subraces__presentation--name">{subRace.name}</h3>
            <p className="subraces__presentation--description">
              <span className="subraces__presentation--span">Description</span>: {subRace.description}
            </p>
            <div>
              <p className="subraces__presentation--trait"><span className="subraces__presentation--span">Trait</span>: {subRace.trait}</p>
              <p className="subraces__presentation--caracteristics--element"> Charisme:<span className="subraces__presentation--span">{subRace.charisma}</span></p>
              <p className="subraces__presentation--caracteristics--element">Constitution:<span className="subraces__presentation--span">{subRace.constitution}</span></p>
              <p className="subraces__presentation--caracteristics--element">Dextérité:<span className="subraces__presentation--span">{subRace.dexterity}</span></p>
              <p className="subraces__presentation--caracteristics--element"> Intelligence:<span className="subraces__presentation--span">{subRace.intelligence}</span></p>
              <p className="subraces__presentation--caracteristics--element">Force:<span className="subraces__presentation--span">{subRace.strength}</span></p>
              <p className="subraces__presentation--caracteristics--element"> Sagesse:<span className="subraces__presentation--span">{subRace.wisdom}</span></p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

// == Export
export default Subraces;
