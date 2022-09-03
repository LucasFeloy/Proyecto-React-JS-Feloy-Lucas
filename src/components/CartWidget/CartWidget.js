import './CartWidget.css';
import { Link } from 'react-router-dom';



const CartWidget = () => {



    return (
        <div className="carrito">
            <Link to="/CartWidget/CartProducts" style={{ textDecoration: 'none' }}><button><img src="/assets/carrito.png" /></button></Link>

       </div>
    )
}

export default CartWidget;