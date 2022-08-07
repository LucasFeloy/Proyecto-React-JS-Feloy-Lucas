
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';





function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<DetailProduct/>}/>
        <Route path='/category/:id' element={<CategoriesContainer/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
