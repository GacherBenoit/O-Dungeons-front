import './subclasses.scss';
import barbarian from '../../assets/images/barbarian.jpg';

function Subclasses() {
  return (
    <main className="subclasses">
      <section className="subclasses__mainclass" id="subclasses">
        <h2 className="subclasses__mainclass--title">cette classe</h2>
        <img className="subclasses__img" src={barbarian} alt="classe" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque luctus elit ut nunc blandit, a faucibus dolor
          malesuada. Pellentesque dignissim, leo in aliquam
          interdum, neque purus consequat arcu, non pulvinar
          dui arcu nec lectus. Aenean euismod interdum mauris
          et pretium. Donec tempor urna interdum dolor rutrum
          cursus. Cras luctus imperdiet mauris, consequat hendrerit
          est. Mauris id turpis dignissim, pulvinar dolor ut,
          scelerisque erat. Donec sodales odio id cursus viverra.
          Ut placerat pulvinar nibh. Duis est quam, dictum at rutrum non, molestie vitae elit.
        </p>
      </section>
      <h2>sous-classe</h2>
      <section className="subclasses__presentation">
        <div className="subclasses__presentation--card">
          <h3>Nom: elfe des mers</h3>
          <p>
            <span>Description</span>: elfe parcourant les océans à dos d'hippocampe.Porteur
            d'une armure en écailles, ils sont de vrais nageurs....
          </p>
          <p>
            <span>Trait</span>: force moyenne, courage sans égal, espiègle.
          </p>
        </div>
        <div className="subclasses__presentation--card">
          <h3>Nom: elfe des montagnes</h3>
          <p>
            <span>Description</span>: elfe parcourant les montagnes à dos de chamois.Porteur
            d'une armure en laine dorée, ils sont de vrais grimpeurs....
          </p>
          <p>
            <span>Trait</span>: force moyenne, force sans égale, espiègle.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Subclasses;
