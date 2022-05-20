// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// == Import : local
import './account.scss';
import {
  mailNewUser,
  passwordNewUser,
  firstnameNewUser,
  lastnameNewUser,
  editAccountUser,
  setNewPassword,
  editPasswordUser,
  getAllAvatar,
  setNewAvatarId,
  changeAvatar,
} from '../../actions/users';

// == Composant

function Account() {
  // On récupère les infos dans le state
  const image = useSelector((state) => state.user.avatar.imageUrl);
  const name = useSelector((state) => state.user.avatar.name);
  const email = useSelector((state) => state.user.email);
  const nom = useSelector((state) => state.user.lastName);
  const prenom = useSelector((state) => state.user.firstName);
  const password = useSelector((state) => state.user.password);
  const newPassword = useSelector((state) => state.user.newpassword);
  const passwordChange = useSelector((state) => state.user.password_change);
  const allavatars = useSelector((state) => state.user.allavatars);

  const dispatch = useDispatch();

  useEffect(
    () => {
      // je veux charger les avatar disponible en BDD, je demande au store
      dispatch(getAllAvatar());
    },
    [], // permet de charger une seule fois la liste
  );

  function handleEditEmail(evt) {
    dispatch(mailNewUser(evt.target.value));
  }

  function handleEditFirstname(evt) {
    dispatch(firstnameNewUser(evt.target.value));
  }

  function handleEditLastname(evt) {
    dispatch(lastnameNewUser(evt.target.value));
  }

  function handleEditpassword(evt) {
    dispatch(passwordNewUser(evt.target.value));
  }

  function handleEditNewPassword(evt) {
    dispatch(setNewPassword(evt.target.value));
  }

  function editAccountSubmit(evt) {
    evt.preventDefault();
    dispatch(editAccountUser());
  }

  function editPasswordSubmit(evt) {
    evt.preventDefault();
    dispatch(editPasswordUser());
  }

  function handleChoiceAvatar(evt) {
    dispatch(setNewAvatarId(evt.target.id));
    dispatch(changeAvatar());
  }
  return (
    <div className="my-account">
      <h3 className="my-account__title">Mes informations</h3>
      {passwordChange && (
        <p className="my-account__information--p">Votre mot de passe a bien été changer</p>
      )}
      <div className="my-account__information">
        <div className="my-account__information--avatar">
          <img className="my-account__information--avatar--image" src={image} alt={name} />
        </div>
        <div className="my-account__information--personnal">
          <p className="my-account__information--nom">Nom: {nom}</p>
          <p className="my-account__information--prenom">Prénom: {prenom}</p>
          <p className="my-account__information--email">Email: {email}</p>
        </div>
      </div>

      <div className="my-account__avatar">
        <h3 className="my-account__avatar--title">Choisir un nouvel avatar</h3>
        <button type="button" className="my-account__avatar--button"> Voir les avatars</button>
        <div className="my-account__avatar--allavatar">
          {allavatars.map((avatar) => (
            <img
              key={avatar.id}
              id={avatar.id}
              src={avatar.imageUrl}
              alt={avatar.name}
              onClick={handleChoiceAvatar}
            />
          ))}
        </div>
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
        <form className="my-account__password--form" onSubmit={editPasswordSubmit}>
          <label htmlFor="password">
            <span className="my-account__password--form--title"> Ancien Mot de passe</span>
            <input
              type="password"
              className="my-account__password--form--input"
              placeholder="Saisissez votre ancien mot de passe"
              value={password}
              onChange={handleEditpassword}
            />
          </label>

          <label htmlFor="newpassword">
            <span className="my-account__password--form--title">Nouveau Mot de passe</span>
            <input
              type="password"
              className="my-account__password--form--input"
              placeholder="Saisissez votre nouveau mot de passe"
              value={newPassword}
              onChange={handleEditNewPassword}
            />
          </label>

          <button type="submit" className="my-account__password--form--button">
            Changer de mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}

// == Export
export default Account;
