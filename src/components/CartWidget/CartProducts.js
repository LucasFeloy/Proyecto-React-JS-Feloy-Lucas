import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartProducts.css';

const CartProducts = () => {

    const { cartProducts, deleteCartItems, deleteItem } = useContext(CartContext)

    return (
        <>
            {cartProducts.map((product) => {
                {console.log(product)}
                {console.log(cartProducts)}
                return (

                    <div className='CartProducts'>
                        <img src={`/assets/${product.image}`} alt="imagen" />
                        <div className="Detail">
                            <span>{product.title}</span>
                            <p key={product.id}>${product.price}</p>
                            <div>
                                <p>TALLE: XL</p>
                                <p>CANTIDAD:</p>
                            </div>
                            <div>
                                <button onClick={deleteItem}>ELIMINAR PRODUCTO</button>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
            {cartProducts.length > 0 ?
                <div className='botonCompra'>
                    <button >TERMINAR COMPRA</button>
                    <button onClick={deleteCartItems}>VACIAR CARRITO</button>
                </div> : <div></div>}
        </>)
}

export default CartProducts
