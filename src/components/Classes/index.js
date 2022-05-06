import './classes.scss';

// ==components
import Card from '../Card';

function Classes() {
  return (
    <main>
      <h1>Classes</h1>
      <div className="classes__cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Classes;
