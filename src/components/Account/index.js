// == Import : npm
import { useSelector } from 'react-redux';
// == Import : local
import './account.scss';

// == Composant

function Account() {
  const image = useSelector((state) => state.user.avatar.imageUrl);
  const name = useSelector((state) => state.user.avatar.name);
  const email = useSelector((state) => state.user.email);
  const nom = useSelector((state) => state.user.lastName);
  const prenom = useSelector((state) => state.user.firstName);
  return (
    <div className="my-account">
      <h3 className="my-account__title">Mes informations</h3>
      <div className="my-account__information">
        <div className="my-account__information--avatar">
          <img className="my-account_information--avatar--image" src={image} alt={name} />
        </div>
        <p className="my-account__information--nom">{nom}</p>
        <p className="my-account__information--prenom">{prenom}</p>
        <p className="my-account__information--email">{email}</p>
      </div>
      <div className="my-account__avatar">
        <p>Choix de l'avatar</p>
      </div>
      <div className="my-account__edit">
        <p>Editer les informations</p>
      </div>
      <div className="my-account__password">
        <p>editer le mot de passe</p>
      </div>
    </div>
  );
}

// == Export
export default Account;
