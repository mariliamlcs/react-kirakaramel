import Routes from './routes';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import '../src/styles/global.css';


function App() {
  return (
    <>
      <Navbar />
      <main>
      <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
