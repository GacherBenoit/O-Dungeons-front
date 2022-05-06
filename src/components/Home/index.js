// == Import: npm
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// == Import
import './home.scss';

// == Composant
import Header from '../Header';
import Presentation from '../Presentation';
import Footer from '../Footer';

function Home() {
  // Le hook useLocation permet de récupérer des informations
  // sur l'emplacement courant (url) et abonne le composant
  // qui l'utilise a la modification de l'url
  const location = useLocation();
  return (
    <div className="home">
      <Header />
      <Presentation />
      <Footer />
    </div>
  );
}

// == Export
export default Home;
