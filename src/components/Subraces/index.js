import './subraces.scss';
import barbarian from '../../assets/images/barbarian.jpg';

function Subraces() {
  return (
    <main className="subraces">
      <section className="subraces__mainclass" id="subraces">
        <h2 className="subraces__mainclass--title">cette race</h2>
        <img className="subraces__img" src={barbarian} alt="race" />
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
      <h2>sous-race</h2>
      <section className="subraces__presentation">
        <div className="subraces__presentation--card">
          <h3>Nom: elfe des mers</h3>
          <p>
            <span>Description</span>: elfe parcourant les océans à dos d'hippocampe.Porteur
            d'une armure en écailles, ils sont de vrais nageurs....
          </p>
          <p>
            <span>Trait</span>: force moyenne, courage sans égal, espiègle.
          </p>
        </div>
        <div className="subraces__presentation--card">
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

export default Subraces;
