import "./App.css";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/NavBar/Nav";
import { Orginals, action, comedy, horror, romance,documentaries } from "./urls";
import "./Components/NavBar/Nav.css";
import "./Components/Banner/Banner.css";
import CardsRow from "./Components/CardsRow/CardsRow";
import "./Components/CardsRow/CardsRow.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <CardsRow url={Orginals} title="Netflix Orginals" imageUrl="" />
      <CardsRow url={action} title="Action" isSmall />
      <CardsRow url={comedy} title="Comedy" isSmall />
      <CardsRow url={horror} title="Horror" isSmall />
      <CardsRow url={romance} title="Romance" isSmall />
      <CardsRow url={documentaries} title="Documentary" isSmall />

    </div>
  );
}

export default App;
