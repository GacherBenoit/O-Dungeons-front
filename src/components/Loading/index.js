// == Import : local
import './loading.scss';

// == Composant
// Ce composant ne s'affiche que lorsqu'on attend une réponse de l'API
function Loading() {
  return <div className="loading">Veuillez patienter</div>;
}

// == Export
export default Loading;
