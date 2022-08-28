import './Error404.css';
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <div className="error">
            <h1>ERROR 404 - página no encontrada</h1>
            <p>Clickea la imagen para volver a ver nuestras remeras</p>
            <p>&#8595; &#8595; &#8595;</p>
            <div><Link to='/'><img src="../assets/homerdoh.gif" alt="imagen" /></Link></div>

        </div>
    )
}

export default Error