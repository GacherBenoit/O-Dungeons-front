import './skills.scss';

function Skills() {
  return (
    <section className="skills">
      <div className="skills__content">
        <ul className="skills__content--properties">
          <li>Nom</li>
          <li>ATK Bonus</li>
          <li>Malus</li>
        </ul>
      </div>
      <div className="skills__choices-menu">
        <div className="skills__choices">
          <label htmlFor="choices-skill" />
          <select className="choices__skill" id="choices-skill">
            <option value="">Compétences</option>
            <option value="Fendoir">Fendoir</option>
            <option value="Attaque éclair">Attaque éclair</option>
            <option value="Soumission">Soumission</option>
          </select>
          <span className="skills__bonus">+5</span>
          <span className="skills__malus">1D6 -Pier</span>
        </div>
        <div className="skills__choices">
          <label htmlFor="choices-skill" />
          <select className="choices__skill" id="choices-skill">
            <option value="">Compétences</option>
            <option value="Fendoir">Fendoir</option>
            <option value="Attaque éclair">Attaque éclair</option>
            <option value="Soumission">Soumission</option>
          </select>
          <span className="skills__bonus">+3</span>
          <span className="skills__malus">1D2 -Slas</span>
        </div>
        <div className="skills__choices">
          <label htmlFor="choices-skill" />
          <select className="choices__skill" id="choices-skill">
            <option value="">Compétences</option>
            <option value="Fendoir">Fendoir</option>
            <option value="Attaque éclair">Attaque éclair</option>
            <option value="Soumission">Soumission</option>
          </select>
          <span className="skills__bonus">+1</span>
          <span className="skills__malus">1D6 -Slas</span>
        </div>
      </div>
    </section>
  );
}

// == Export
export default Skills;
