import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartProducts.css';

const CartProducts = () => {

    const { cartProducts } = useContext(CartContext)

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
                                <button>XL</button>
                                <button>L</button>
                                <button>M</button>
                                <button>S</button>
                                <button>XS</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>)
}

export default CartProducts
