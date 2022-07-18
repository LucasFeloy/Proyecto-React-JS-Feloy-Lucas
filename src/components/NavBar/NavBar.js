import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar(){
    return(
        <div>
            <h1>FRIKI-REMERAS</h1>
            <ul>
                <li>NOSOTROS</li>
                <li>REMERAS</li>
                <li>GUIA DE TALLES</li>
                <li>CONTACTO</li>
                <li><CartWidget/></li>
            </ul>
          
        </div>

    )
}

export default NavBar;