// == Import: npm
import { useSelector } from 'react-redux';

// == Import : local
// Composant
import Loading from '../Loading';
import ClasseItem from './ClasseItem';
// Css
import './subclasses.scss';

// == Composant

function Subclasses() {
  // const { slug } = useParams();
  // console.log(slug);
  const loading = useSelector((state) => state.classes.loading);
  const currentClasse = useSelector((state) => state.classes.currentClasse);
  const currentSubClasse = useSelector((state) => state.classes.currentClasse.subclasses);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="subclasses">
      <section className="subclasses__mainclass" id="subclasses">
        <h2 className="subclasses__mainclass--title">{currentClasse.name}</h2>
        <img className="subclasses__img" src={`data:image/png;base64,${currentClasse.image}`} alt="classe" />
        <p className="subclasses__paragraphe">{currentClasse.description}</p>
        <ClasseItem />
      </section>
      <h2 className="subclasses__title">Sous-classe</h2>
      <section className="subclasses__presentation">
        {/* On verifie si c'est defini et si c'est defini, on peu boucler dessus
        ressource :
        https://stackoverflow.com/questions/67601748/typeerror-map-is-not-a-function-using-react-js */}
        { currentSubClasse && currentClasse.subclasses.map((subclasse) => (
          <div className="subclasses__presentation--card" id={subclasse.id} key={subclasse.id}>
            <h3 className="subclasses__presentation--title">{subclasse.name}</h3>
            <p>
              <p className="subclasses__presentation--descritpion">{subclasse.description}</p>
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

// == Export
export default Subclasses;
