import './caracteristics.scss';

function CaracteristicsPrincipals() {
  const cararcteristics = ['- Force :', '- Dextérité :', '- Constitution :', '- Intelligence :', '- Volonté :', '- Charisme :'];
  return (
    <section className="caracteristics__principals">
      <ul className="caracteristics__principals--list">
        { cararcteristics.map((item) => <li><input className="caracteristics__principals--list--item" type="text" value={item} /></li>)}
      </ul>
    </section>
  );
}

export default CaracteristicsPrincipals;
