import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [waist, setWaist] = useState('M')


    const addToCart = (product) => {

        let inCart = cartProducts.find(item => item.id === product.id)

        if (!inCart) {
            
            setCartProducts(cartProducts => [...cartProducts, product], product.waist)
            setTotalProducts(product.contador)
            
        }
    }

    const deleteItem = (id) => {
        setCartProducts(cartProducts => cartProducts.filter(el => el.id !== id))
    }

    const deleteCartItems = () => {
        setCartProducts([])
        setTotalProducts(0)
    }

 



    const data = {
        cartProducts,
        setCartProducts,
        addToCart,
        deleteCartItems,
        setTotalProducts,
        totalProducts,
        deleteItem,
        waist,
        setWaist
    }



    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;
export { CartContext }