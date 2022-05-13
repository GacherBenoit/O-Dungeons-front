// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Import : local
import Loading from '../Loading';
import ClasseItem from './ClasseItem';
import './subclasses.scss';

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
        <img className="subclasses__img" src={currentClasse.imageUrl} alt="classe" />
        <p className="subclasses__paragraphe">{currentClasse.description}</p>
        <ClasseItem />
      </section>
      <h2>Sous-classe</h2>
      <section className="subclasses__presentation">
        {/* On verifie si c'est defini et si c'est defini, on peu boucler dessus
        ressource :
        https://stackoverflow.com/questions/67601748/typeerror-map-is-not-a-function-using-react-js */}
        { currentSubClasse && currentClasse.subclasses.map((subclasse) => (
          <div className="subclasses__presentation--card" id={subclasse.id} key={subclasse.id}>
            <h3>{subclasse.name}</h3>
            <p>
              <span>{subclasse.description}</span>
            </p>
            <p>
              <span>Trait</span>: force moyenne, courage sans égal, espiègle.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Subclasses;
