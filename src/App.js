import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/NavBar/Nav';
import './Components/NavBar/Nav.css'
import './Components/Banner/Banner.css'
import CardsRow from './Components/CardsRow/CardsRow';
import './Components/CardsRow/CardsRow.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <CardsRow/>
    </div>
  );
}

export default App;