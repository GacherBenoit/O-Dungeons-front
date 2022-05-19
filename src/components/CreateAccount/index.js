// == Import : npm
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './CreateAccount.scss';
import {
  mailNewUser,
  passwordNewUser,
  firstnameNewUser,
  lastnameNewUser,
  createNewAccount,
} from '../../actions/users';

// == Composant
function CreateAccount() {
  const mail = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleChangeNewEmail(evt) {
    dispatch(mailNewUser(evt.target.value));
  }

  function handleChangeNewPassword(evt) {
    dispatch(passwordNewUser(evt.target.value));
  }

  function handleChangeNewFirstname(evt) {
    dispatch(firstnameNewUser(evt.target.value));
  }

  function handleChangeNewLastname(evt) {
    dispatch(lastnameNewUser(evt.target.value));
  }

  function handleAccountSubmit(evt) {
    evt.preventDefault();
    dispatch(createNewAccount());
    navigate('/', { replace: true });
  }
  return (
    <main className="account">
      <h1 className="account__title">Créer un Compte</h1>
      <form className="account__form" onSubmit={handleAccountSubmit}>
        <label htmlFor="lastname">
          <span className="account__form--title">Nom</span>
          <input
            type="text"
            className="account__form--input"
            placeholder="Saisissez votre nom..."
            value={lastname}
            onChange={handleChangeNewLastname}
          />
        </label>

        <label htmlFor="firstname">
          <span className="account__form--title">Prenom</span>
          <input
            type="text"
            className="account__form--input"
            placeholder="Saisissez votre prénom..."
            value={firstname}
            onChange={handleChangeNewFirstname}
          />
        </label>

        <label htmlFor="email">
          <span className="account__form--title">Email</span>
          <input
            type="email"
            className="account__form--input"
            placeholder="Saisissez votre email..."
            value={mail}
            onChange={handleChangeNewEmail}
          />
        </label>

        <label htmlFor="password">
          <span className="account__form--title">Mot de passe</span>
          <input
            type="password"
            className="account__form--input"
            placeholder="Saisissez votre mot de passe"
            value={password}
            onChange={handleChangeNewPassword}
          />
        </label>

        <button type="submit" className="account__form--button">
          Créer un compte
        </button>
      </form>
    </main>
  );
}

// == Export

export default CreateAccount;
