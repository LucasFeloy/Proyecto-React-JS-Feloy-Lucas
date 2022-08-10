import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import Products from '../../utils/products.Mock';



function NavBar() {


    const categories = Products.map((e) => e.category)

    return (

        <div>
            <header >
            <Link to='/' style={{ textDecoration: 'none' , color:'red'}}><h1>FRIKI-REMERAS</h1></Link>
            </header>
            <ul>
                <Link to="/" style={{ textDecoration: 'none' }}><li>REMERAS</li></Link>
                <Link to={`/category/${categories[5]}`} style={{ textDecoration: 'none' }}><li>SIMPSONS</li></Link>
                <Link to={`/category/${categories[0]}`} style={{ textDecoration: 'none' }}><li>ANIME</li></Link>
                <Link to={`/category/${categories[6]}`} style={{ textDecoration: 'none' }}><li>STAR WARS</li></Link>
                <Link to={`/category/${categories[4]}`} style={{ textDecoration: 'none' }}><li>SERIES</li></Link>
                <li>GUIA DE TALLES</li>
                <li><CartWidget /></li>
            </ul>

        </div>

    )
}

export default NavBar;