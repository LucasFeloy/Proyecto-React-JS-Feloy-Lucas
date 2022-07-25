
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
        <ItemListContainer />
      
      </div>
    </div>
  );
}

export default App;
