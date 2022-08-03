
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Remeras from './pages/Remeras';
import DetailProduct from './pages/DetailProduct';



function App() {
  return (
    <BrowserRouter>

      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/remeras' element={<Remeras/>}/>
        <Route path='/remeras/detalle/:id' element={<DetailProduct/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
