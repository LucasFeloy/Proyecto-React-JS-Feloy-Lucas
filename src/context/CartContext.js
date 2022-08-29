import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)

    const addToCart = (product) => {

        let inCart = cartProducts.find(item => item.id === product.id)
        console.log(product.id) 
            
        if (!inCart) {
            setTotalPrice(totalPrice + product.price*product.contador)
            setCartProducts(cartProducts => [...cartProducts, product])
            setTotalProducts(product.contador)
            
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