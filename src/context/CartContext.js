import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const addToCart = (product) => {
        let inCart = cartProducts.find(item => item.id === product.id)
        if (!inCart) {
            
            setCartProducts(cartProducts => [...cartProducts, product])
        }

    }

    const deleteCartItems=()=>{
        setCartProducts([])
    }

    const deleteItem=(product)=>{
        
    
    }

    const data = {
        cartProducts,
        setCartProducts,
        addToCart,
        deleteCartItems,
        deleteItem
    }
   


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;
export { CartContext }