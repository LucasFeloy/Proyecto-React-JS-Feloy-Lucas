import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";
import Products from '../../utils/products.Mock';



function NavBar(){
   

const categories=Products.map((e)=>e.category)

     return(
        
        <div>
            <Link to='/'><h1>FRIKI-REMERAS</h1></Link>
            <ul>
                <Link to="/"><li>REMERAS</li></Link>
                <Link to={`/category/${categories[5]}`}><li>SIMPSONS</li></Link>
                <Link to={`/category/${categories[0]}`}><li>ANIME</li></Link>
                <Link to={`/category/${categories[6]}`}><li>STAR WARS</li></Link>
                <Link to={`/category/${categories[4]}`}><li>SERIES</li></Link>
                <li>GUIA DE TALLES</li>
                <li><CartWidget/></li>
            </ul>
          
        </div>

    )
}

export default NavBar;