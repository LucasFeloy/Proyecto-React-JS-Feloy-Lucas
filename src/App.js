
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div >
      <NavBar />
      <div>
        
      </div>
      <div>
        <ItemListContainer price="2200" image={"gokuUI.jpg"} />
        <ItemListContainer price="2350" image={"homeroPastelito.jpg"} />
        <ItemListContainer price="2420" image={"ikki.jpg"} />
        <ItemListContainer price="2200" image={"charizard.jfif"} />
      </div>
    </div>
  );
}

export default App;
