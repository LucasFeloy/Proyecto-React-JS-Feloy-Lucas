import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";


function NavBar(){
    return(
        <div>
            
            <ul>
                <Link to="/"><li>INICIO</li></Link>
                <Link to="/remeras"><li>REMERAS</li></Link>
                <li>GUIA DE TALLES</li>
                <li>CONTACTO</li>
                <li><CartWidget/></li>
            </ul>
          
        </div>

    )
}

export default NavBar;