// == Import
import './home.scss';

// == Composant
import Header from '../Header';
import Presentation from '../Presentation';
import Footer from '../Footer';

function Home() {
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
