
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';
import CartProvider from './context/CartContext';
import CartProducts from './components/CartWidget/CartProducts';





function App() {
  return (
    <CartProvider>
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<DetailProduct />} />
        <Route path='/category/:id' element={<CategoriesContainer />} />
        <Route path='/CartWidget/CartProducts' element={<CartProducts/>}/>
      </Routes>

    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
