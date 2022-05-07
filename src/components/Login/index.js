// == Import: npm
import { useSelector, useDispatch } from 'react-redux';

// == Import: local
import './login.scss';

// == Composant
function Login() {
  // Afin d'eviter le rechargement de la page lors de la soumission du formulaire
  // On creer une fonction qui annule le comportoment par defaut de ce dernier
  function handleSubmit(evt) {
    evt.preventDefault();
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
            value=""
          />
        </label>

        <label htmlFor="password">
          <span className="login__form--title">Mot de passe</span>
          <input
            type="password"
            className="login__form--input"
            placeholder="Saisissez votre mot de passe"
            value=""
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
