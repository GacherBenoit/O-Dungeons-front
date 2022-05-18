// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './account.scss';
import {
  mailNewUser,
  passwordNewUser,
  firstnameNewUser,
  lastnameNewUser,
  editAccountUser,
} from '../../actions/users';

// == Composant

function Account() {
  // On récupère les infos dans le state
  // const image = useSelector((state) => state.user.avatar.imageUrl);
  // const name = useSelector((state) => state.user.avatar.name);
  const email = useSelector((state) => state.user.email);
  const nom = useSelector((state) => state.user.lastName);
  const prenom = useSelector((state) => state.user.firstName);

  const dispatch = useDispatch();

  function handleEditEmail(evt) {
    dispatch(mailNewUser(evt.target.value));
  }

  function handleEditFirstname(evt) {
    dispatch(firstnameNewUser(evt.target.value));
  }

  function handleEditLastname(evt) {
    dispatch(lastnameNewUser(evt.target.value));
  }

  function editAccountSubmit(evt) {
    evt.preventDefault();
    dispatch(editAccountUser());
  }

  return (
    <div className="my-account">
      <h3 className="my-account__title">Mes informations</h3>
      <div className="my-account__information">
        <div className="my-account__information--avatar">
          {/* a decommenter des demains lorsque la modification serait fait
          sur le serveur officiel */}
          {/* <img className="my-account__information--avatar--image" src={image} alt={name} /> */}
        </div>
        <div className="my-account__information--personnal">
          <p className="my-account__information--nom">Nom: {nom}</p>
          <p className="my-account__information--prenom">Prénom: {prenom}</p>
          <p className="my-account__information--email">Email: {email}</p>
        </div>
      </div>

      <div className="my-account__avatar">
        <p>Choix de l'avatar (a venir....)</p>
      </div>

      <div className="my-account__edit">
        <form className="my-account__edit--form" onSubmit={editAccountSubmit}>
          <label htmlFor="lastname">
            <span className="my-account__edit--form--title">Nom</span>
            <input
              type="text"
              className="my-account__edit--form--input"
              placeholder="Saisissez votre nom..."
              value={nom}
              onChange={handleEditLastname}
            />
          </label>

          <label htmlFor="firstname">
            <span className="my-account__edit--form--title">Prenom</span>
            <input
              type="text"
              className="my-account__edit--form--input"
              placeholder="Saisissez votre prénom..."
              value={prenom}
              onChange={handleEditFirstname}
            />
          </label>

          <label htmlFor="email">
            <span className="my-account__edit--form--title">Email</span>
            <input
              type="email"
              className="my-account__edit--form--input"
              placeholder="Saisissez votre email..."
              value={email}
              onChange={handleEditEmail}
            />
          </label>

          <button type="submit" className="my-account__edit--form--button">
            Modifier les informations
          </button>

        </form>
      </div>
      <div className="my-account__password">
        <p>editer le mot de passe</p>
      </div>
    </div>
  );
}

// == Export
export default Account;
