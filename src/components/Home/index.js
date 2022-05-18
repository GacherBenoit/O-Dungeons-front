// == Import: npm
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';

// == Import
import './home.scss';
import { findUser } from '../../actions/users';

// == Composant
import Header from '../Header';
import Presentation from '../Presentation';
import Rules from '../Rules';
import Classes from '../Classes';
import Races from '../Races';
import Creator from '../Creator';
import Error from '../Error';
import Login from '../Login';
import About from '../About';
import Legal from '../Legal';
import Footer from '../Footer';
import Subclasses from '../Subclasses';
import Subraces from '../Subraces';
import CreateAccount from '../CreateAccount';
import Account from '../Account';
import Logout from '../Logout';

function Home() {
  // On récupère l'id dans le localStorage
  const id = localStorage.getItem('id');

  const dispatch = useDispatch();

  useEffect(
    () => {
      if (id !== null) {
        dispatch(findUser());
      }
    },
    [],
  );

  // on regarde dans le state si l'utilisateur est connecter
  const logged = useSelector((state) => state.user.logged);

  // The useLocation hook allows to retrieve information
  // on the current location (url) and subscribes the component
  //  who uses it has the modification of the url
  const location = useLocation();

  // we condition an effect on the change of url
  useEffect(
    () => {
      //  On this effect , we interact with the real DOM
      //  to scroll on the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location], // <- This is where we see thatsuseEffect depend on the location
  );
  return (
    <div className="home">
      <Header />
      {logged && (
        <Logout />
      )}
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/races" element={<Races />} />
        <Route path="/creation-personnages" element={<Creator />} />
        <Route path="/regles-et-univers" element={<Rules />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/qui-somme-nous" element={<About />} />
        <Route path="/mentions-legal" element={<Legal />} />
        <Route path="*" element={<Error />} />
        <Route path="/classes/:slug" element={<Subclasses />} />
        <Route path="/races/:slug" element={<Subraces />} />
        <Route path="/creer-un-compte" element={<CreateAccount />} />
        <Route path="/mon-compte" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default Home;
