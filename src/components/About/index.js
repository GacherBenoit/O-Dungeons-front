// Import: Local
import './about.scss';

// == Composant

function About() {
  return (
    <main className="about">
      <h1 className="about__title">Qui somme nous...?</h1>
      <p className="about__paragraphe">
        <ul className="about__list">
          <h2 className="about__list--subtitle">Permettez-nous, tout d'abord, de nous présenter:</h2>
          <li className="about__list--item">
            A l'origine de tout, du moins, à l'origine de
            ce projet, nous avons notre Maître du Jeu (M.J.):
            <span className="about__list--span"> Alban </span>, grand joueur dans l'âme et
            toujours invaincu au jeu de la marelle.
          </li>
          <li className="about__list--item">
            Ensuite, pour l'assister dans sa tâche, nous vous présentons
            par ordre d'apparition:
            <ul className="about__secondList">
              <li className="about__secondList--item">Nos deux petits nains au fond de leur "Back-cave":</li>
              <li className="about__secondList--item">
                - <span className="about__list--span">Pierre-Arnaud</span> (dit P.A.), spécialiste du maniement
                de la pioche en tout sol,
              </li>
              <li className="about__secondList--item">
                - <span className="about__list--span">Roman</span> (dit l'Exilé), grand explorateur des Terres
                du Sud,
              </li>
            </ul>
            <ul className="about__thirdList">
              Plutôt cachés dans les plaines, voici nos orcs:
              <li className="about__thirdList--item">
                - <span className="about__list--span">Benoît</span> (dit G.M.), fan absolu
                des farfadettes,
              </li>
              <li className="about__thirdList--item">
                - <span className="about__list--span">François</span> (dit Monk), obsédé par la moindre petite
                parcelle de terrain qui n'est pas à sa place
              </li>
            </ul>
          </li>

        </ul>
      </p>
      <p className="about__paragraphe">
        Toute cette équipe oeuvre dans la joie et la bonne humeur
        pour vous faire découvrir ce jeu magnifique qu'est<span className="about__paragraphe--span"> Donjons et Dragons !!</span>
      </p>
      <section className="purpose">
        <h2 className="purpose__subtitle">Et justement, pourquoi ce site ...?</h2>
        <p className="purpose__paragraphe">
          Notre idée est de permettre à nos utilisateurs de pouvoir créer
          des fiches de personnages jouables , ainsi que d'imprimer ces
          fiches créées afin de pouvoir jouer n'importe où.
        </p>
        <p className="purpose__paragraphe">
          Pour les joueurs débutants, vous trouverez une règle de jeu
          exhaustive, un descriptif de l'univers de Donjons et Dragons,
          une aide à la création de personnages, le tout traduit en
          français.
        </p>
        <p className="purpose__paragraphe">
          Nous vous souhaitons de bonnes parties!! Et si jamais vous
          chercher des joueurs, contactez-nous , nous nous ferons
          un plaisir de vous mettre une bonne fessée (je sais que
          c'est interdit par la loi, mais pas dans <span className="purpose__paragraphe--span">D&D</span>)...
        </p>
      </section>
    </main>
  );
}

// == Export

export default About;
