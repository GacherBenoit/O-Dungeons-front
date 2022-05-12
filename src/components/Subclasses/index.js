// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasseComplete } from '../../actions/classes';
import './subclasses.scss';

function Subclasses() {
  // const { slug } = useParams();
  // console.log(slug);
  const currentClasse = useSelector((state) => state.classes.currentClasse);
  const currentSubClasse = useSelector((state) => state.classes.currentClasse.subclasses);
  const dispatch = useDispatch();

  // Au montage du composant principal
  useEffect(
    () => {
      dispatch(fetchClasseComplete());
    },
    [],
  );
  // const informationClasse = { ...currentClasse };
  // const { currentClasse: { subclasses } } = useSelector((state) => state.classes.currentClasse);
  // const currentSubClasses = useSelector((state) => state.classes.currentClasse.subclasses);
  // const { id, name, description } = currentSubClasses;
  // // console.log(subclasses);
  // // console.log(informationClasse);
  console.log(currentClasse);
  console.log(currentSubClasse);
  // console.log(currentclasse.subclasses.name);
  // console.log(subClasses);
  return (
    <main className="subclasses">
      <section className="subclasses__mainclass" id="subclasses">
        <h2 className="subclasses__mainclass--title">{currentClasse.name}</h2>
        <img className="subclasses__img" src={currentClasse.imageUrl} alt="classe" />
        <p>{currentClasse.description}</p>
      </section>
      <h2>Sous-classe</h2>
      <section className="subclasses__presentation">
        {/* {console.log(currentSubClasses)} */}
        { currentClasse.map((subclasse) => (
          <div className="subclasses__presentation--card" id={subclasse.id}>
            <h3>{subclasse.name}</h3>
            <p>
              <span>{subclasse.description}</span>
              : elfe parcourant les océans à dos d'hippocampe.Porteur
              d'une armure en écailles, ils sont de vrais nageurs....
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
