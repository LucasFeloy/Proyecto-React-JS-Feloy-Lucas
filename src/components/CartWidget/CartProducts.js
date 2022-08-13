import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartProducts.css';
import { Link } from 'react-router-dom';

const CartProducts = () => {

    const { cartProducts, deleteCartItems, deleteItem } = useContext(CartContext)

    const price = cartProducts.map((product) => product.price*product.quantity)
    const finalPrice = price.reduce((acum, itemPrice) => acum + itemPrice, 0)
    
    
    return (
        <>
            {cartProducts.map((product) => {

                return (

                    <div className='CartProducts'>
                        <img src={`/assets/${product.image}`} alt="imagen" />
                        <div className="Detail">
                            <span>{product.title}</span>
                            <p key={product.id}>${product.price}</p>
                            <div>
                                <p>TALLE: XL</p>
                                <p>CANTIDAD:{product.quantity} </p>
                                <p>TOTAL: ${product.price*product.quantity}</p>
                            </div>
                            <div>
                                <button onClick={deleteItem} >ELIMINAR PRODUCTO</button>
                            </div>
                        </div>
                    </div>

                )
            })}
            {cartProducts.length > 0 ?
                <div>
                    <p className='precio'>PRECIO FINAL=${finalPrice}</p>
                    <div className='botonCompra'>
                        <button >TERMINAR COMPRA</button>
                        <button onClick={deleteCartItems}>VACIAR CARRITO</button>
                    </div></div> : <div></div>}
            {cartProducts.length == 0 && <div className='carritoVacio'><p>NO HAY PRODUCTOS EN TU CARRITO!!!, CLICKEA EN LA IMAGEN PARA ELEGIR TUS REMERAS &#128521; &#8681;</p>
                <Link to='/'><img src='/assets/naruto.jpg' alt='imagen' /></Link>
            </div>}

        </>)
}

export default CartProducts
