// == Import: Local
import './legal.scss';

// == Composant

function Legal() {
  return (
    <main className="legal">
      <h1 className="legal__title">Mentions Légales</h1>
      <p className="legal__paragraphe">En vigueur au 05/05/2022</p>
      <section className="legal__section">
        <p className="legal__section--paragraphe">
          Conformément aux dispositions des Articles 6-III
          et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
          Confiance dans l'économie numérique, dite L.C.E.N.,
          il est porté à la connaissance des utilisateurs et
          visiteurs, ci-après l'"Utilisateur", du site "O'Dungeons",
          ci-après le "Site", les présentes mentions légales.
        </p>
        <p className="legal__section--paragraphe">
          La connexion et la navigation sur le Site par l'Utilisateur
          implique acceptation intégrale et sans réserve des présentes mentions légales.
        </p>
        <p className="legal__section--paragraphe">
          Ces dernières sont accessibles sur le Site à la rubrique
          "Mentions légales".
        </p>
        <h2 className="legal__section--title">Article1-l'editeur</h2>
        <p className="legal__section--paragraphe">
          ci-après l'"Editeur".
        </p>
        <h2 className="legal__section--title">Article2-l'hebergeur</h2>
        <p className="legal__section--paragraphe">
          L'hébergeur du Site est la société 'Quinenveut', dont le siège
          social est situé au 222 quai de la fosse 44000 Nantes, avec le
          numéro de téléphone: +336569 et l'adresse mail:
          jenpeutplus@skip.fr .
        </p>
        <h2 className="legal__section--title">Article3-accès au site</h2>
        <p className="legal__section--paragraphe">
          Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas
          de force majeure, interruption programmée ou non et pouvant
          découler d'une nécessité de maintenance.
        </p>
        <p className="legal__section--paragraphe">
          En cas de modification, interruption ou suspension du Site,
          l'Editeur ne saurait être tenu responsable.
        </p>
        <h2 className="legal__section--title"> Article4-collecte des données</h2>
        <p className="legal__section--paragraphe">
          Le Site assure à l'Utilisateur une collecte et un
          traitement d'informations personnelles dans le respect de
          la vie privée conformément à la loi n°78-17 du 6 janvier 1978
          relative à l'informatique, aux fichiers et aux libertés.
        </p>
        <p className="legal__section--paragraphe">
          En vertu de la loi Informatique et Libertés, en date du 6
          janvier 1978, l'Utilisateur dispose d'un droit  d'accès,
          de rectification, de suppression et d'opposition de ses
          données personnelles. L'Utilisateur exerce ce droit:
        </p>
        <p className="legal__section--paragraphe">
          Toute utilisation, reproduction, diffusion, commercialisation,
          modification de toute ou partie du Site, sans autorisation de
          l'Editeur est prohibée et pourra entraînée des actions et
          poursuites judiciaires telles que notamment prévues par le
          Code de la propriété intellectuelle et le Code Civil.
        </p>
        <p className="legal__section--paragraphe">Rédigé sur http://legalplace.fr</p>
      </section>
    </main>
  );
}

// == Export
export default Legal;
