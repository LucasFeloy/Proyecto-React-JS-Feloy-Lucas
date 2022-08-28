import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)

    const addToCart = (product) => {

        let inCart = cartProducts.find(item => item.id === product.id)
        setTotalProducts(totalProducts +  product.contador)
        if (!inCart) {
            setTotalPrice(totalPrice + product.price)
            setCartProducts(cartProducts => [...cartProducts, product])
            
        }
       
    }
    


    const deleteCartItems = () => {
        setCartProducts([])
        setTotalPrice(0)
        setTotalProducts(0)
    }



    const data = {
        cartProducts,
        setCartProducts,
        addToCart,
        deleteCartItems,
        totalPrice,
        setTotalProducts,
        totalProducts
 
    }



    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;
export { CartContext }