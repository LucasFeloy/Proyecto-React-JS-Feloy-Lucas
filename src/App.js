
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div >
      <NavBar />
      <div>
        
      </div>
      <div className="ItemOrder">
        <ItemListContainer price="2200" image={"gokuUI.jpg"} stock={15} />
        <ItemListContainer price="2350" image={"homeroPastelito.jpg"} stock={10} />
        <ItemListContainer price="2420" image={"ikki.jpg"} stock={12} />
        <ItemListContainer price="2200" image={"charizard.jfif"} stock={8} />
      </div>
    </div>
  );
}

export default App;
