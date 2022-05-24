// == Import: npm
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// == Import: local
// Css
import './login.scss';
// Action
import { setEmail, setPassword, login } from '../../actions/users';

// == Composant
function Login() {
  // On cible la valeur contenu dans le state afin d'obtenir la mise a jour
  // en temp reel quand l'utilisateur tape une touche de son clavier
  const valueMail = useSelector((state) => state.user.email);

  // On fait la meme chose pour le password
  const valuePassword = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Afin d'eviter le rechargement de la page lors de la soumission du formulaire
  // On creer une fonction qui annule le comportoment par defaut de ce dernier
  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(login());
    navigate('/', { replace: true });
  }

  // fonction qui va permettre a l'utilisateur de rentrer son email et
  // qui va etre prise en compte grace a l'action
  // et qui va modifier le state en conséquence
  function handleChangeEmail(evt) {
    dispatch(setEmail(evt.target.value));
  }

  // idem pour le champ password
  function handleChangePassword(evt) {
    dispatch(setPassword(evt.target.value));
  }
  return (
    <main className="login">
      <h1 className="login__title">Connexion</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span className="login__form--title">Email</span>
          <input
            type="email"
            className="login__form--input"
            placeholder="Saisissez votre email..."
            value={valueMail}
            onChange={handleChangeEmail}
          />
        </label>

        <label htmlFor="password">
          <span className="login__form--title">Mot de passe</span>
          <input
            type="password"
            className="login__form--input"
            placeholder="Saisissez votre mot de passe"
            value={valuePassword}
            onChange={handleChangePassword}
          />
        </label>

        <button type="submit" className="login__form--button">
          Se Connecter
        </button>

        <div className="login__create--account">
          <p className="login__create--account--texte">Pas encore de compte ? </p>
          <NavLink className="login__create--account--link" to="/creer-un-compte">créer un compte</NavLink>

        </div>

      </form>
    </main>
  );
}

// == Export
export default Login;
