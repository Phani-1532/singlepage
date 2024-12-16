
import Navbar from './navbar'
import "./navbar.css"
import Footer from './footer';
import "./footer.css";
import Carousel from './carousel';
import "./carousel.css";
import Card from './card';
import "./card.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
