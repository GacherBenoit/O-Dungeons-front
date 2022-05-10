import './throws.scss';

function Throws() {
  return (
    <div className="throws">
      <h4 className="throws__title">Saving Throws</h4>
      <div className="throws__div">
        <div className="throws__div--left">
          <input type="checkbox" id="force" name="throws" value="force" />
          <label htmlFor="force">Force</label>
        </div>
        <div className="throws__div--right">
          <input type="checkbox" id="constitution" name="throws" value="constitution" />
          <label htmlFor="constitution">Constitution</label>
        </div>
      </div>
      <div className="throws__div">
        <div className="throws__div--left">
          <input type="checkbox" id="volonté" name="throws" value="volonté" />
          <label htmlFor="volonté">Volonté</label>
        </div>
        <div className="throws__div--right">
          <input type="checkbox" id="intelligence" name="throws" value="intelligence" />
          <label htmlFor="intelligence">Intelligence</label>
        </div>
      </div>
      <div className="throws__div">
        <div className="throws__div--left">
          <input type="checkbox" id="charisme" name="throws" value="charisme" />
          <label htmlFor="charisme">Charisme</label>
        </div>
        <div className="throws__div--right">
          <input type="checkbox" id="dextérité" name="throws" value="dextérité" />
          <label htmlFor="dextérité">Dextérité</label>
        </div>
      </div>
    </div>
  );
}

export default Throws;
