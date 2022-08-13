import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import Products from '../../utils/products.Mock';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


function NavBar() {

    const { cartProducts } = useContext(CartContext)
    const categories = Products.map((e) => e.category)

    return (

        <div>
            <header >
                <Link to='/' style={{ textDecoration: 'none' }}><h1>FRIKI-REMERAS</h1></Link>
            </header>
            <ul>
                <Link to="/" style={{ textDecoration: 'none' }}><li>REMERAS</li></Link>
                <div className='divisor'></div>
                <Link to={`/category/${categories[5]}`} style={{ textDecoration: 'none' }}><li>SIMPSONS</li></Link>
                <div className='divisor'></div>
                <Link to={`/category/${categories[0]}`} style={{ textDecoration: 'none' }}><li>ANIME</li></Link>
                <div className='divisor'></div>
                <Link to={`/category/${categories[6]}`} style={{ textDecoration: 'none' }}><li>STAR WARS</li></Link>
                <div className='divisor'></div>
                <Link to={`/category/${categories[4]}`} style={{ textDecoration: 'none' }}><li>SERIES</li></Link>
                <div className='divisor'></div>
                <li>GUIA DE TALLES</li>
                <div className='divisor'></div>
                 <li><CartWidget/></li>
                {cartProducts.length > 0 ? <li>{cartProducts.length}</li> : <li></li>}
            </ul>


        </div>

    )
}

export default NavBar;