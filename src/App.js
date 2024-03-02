import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/NavBar/Nav';
import {Orginals,action} from './urls'
import './Components/NavBar/Nav.css'
import './Components/Banner/Banner.css'
import CardsRow from './Components/CardsRow/CardsRow';
import './Components/CardsRow/CardsRow.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <CardsRow url={Orginals}  title="Netflix Orginals" imageUrl=""/>
      <CardsRow  url={action} title="Action" isSmall  />
    </div>
  );
}

export default App;