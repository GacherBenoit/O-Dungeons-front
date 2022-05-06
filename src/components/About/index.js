// Import: Local
import './about.scss';

// == Composant

function About() {
  return (
    <main className="about">
      <h1>Qui somme nous...?</h1>
      <p>
        <ul>
          <h2 className="subtitle">Permettez-nous, tout d'abord, de nous présenter:</h2>
          <li>
            A l'origine de tout, du moins, à l'origine de
            ce projet, nous avons notre Maître du Jeu (M.J.):
            <span> Alban </span>, grand joueur dans l'âme et
            toujours invaincu au jeu de la marelle.
          </li>
          <li>
            Ensuite, pour l'assister dans sa tâche, nous vous présentons
            par ordre d'apparition:
            <ul>
              <li>Nos deux petits nains au fond de leur "Back-cave":</li>
              <li>
                - <span>Pierre-Arnaud</span> (dit P.A.), spécialiste du maniement
                de la pioche en tout sol,
              </li>
              <li>
                - <span>Roman</span> (dit l'Exilé), grand explorateur des Terres
                du Sud,
              </li>
            </ul>
            <ul>
              Plutôt cachés dans les plaines, voici nos orcs:
              <li>
                - <span>Benoît</span> (dit G.M.), fan absolu
                des farfadettes,
              </li>
              <li>
                - <span>François</span> (dit Monk), obsédé par la moindre petite
                parcelle de terrain qui n'est pas à sa place
              </li>
            </ul>
          </li>

        </ul>
      </p>
      <p>
        Toute cette équipe oeuvre dans la joie et la bonne humeur
        pour vous faire découvrir ce jeu magnifique qu'est
        Donjons et Dragons !!
      </p>
      <section>
        <h2 className="subtitle">Et justement, pourquoi ce site ...?</h2>
        <p>
          Notre idée est de permettre à nos utilisateurs de pouvoir créer
          des fiches de personnages jouables , ainsi que d'imprimer ces
          fiches créées afin de pouvoir jouer n'importe où.
        </p>
        <p>
          Pour les joueurs débutants, vous trouverez une règle de jeu
          exhaustive, un descriptif de l'univers de Donjons et Dragons,
          une aide à la création de personnages, le tout traduit en
          français.
        </p>
        <p>
          Nous vous souhaitons de bonnes parties!! Et si jamais vous
          chercher des joueurs, contactez-nous , nous nous ferons
          un plaisir de vous mettre une bonne fessée (je sais que
          c'est interdit par la loi, mais pas dans D&D)...
        </p>
      </section>
    </main>
  );
}

// == Export

export default About;
