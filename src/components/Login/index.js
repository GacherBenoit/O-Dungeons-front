// == Import: npm
import { useSelector, useDispatch } from 'react-redux';

// == Import: local
import './login.scss';
import { setEmail, setPassword } from '../../actions';

// == Composant
function Login() {
  // On cible la valeur contenu dans le state afin d'obtenir la mise a jour
  // en temp reel quand l'utilisateur tape une touche de son clavier
  const valueMail = useSelector((state) => state.settings.email);

  // On fait la meme chose pour le password
  const valuePassword = useSelector((state) => state.settings.password);

  const dispatch = useDispatch();

  // Afin d'eviter le rechargement de la page lors de la soumission du formulaire
  // On creer une fonction qui annule le comportoment par defaut de ce dernier
  function handleSubmit(evt) {
    evt.preventDefault();
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

      </form>
    </main>
  );
}

// == Export
export default Login;
