import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {
    
    const [cartProducts, setCartProducts] = useState([])
    const [itemQuantity, setItemQuantity] = useState(0)
   
    console.log(itemQuantity)
    
    const addToCart = (product) => {
        product.quantity=itemQuantity
        let inCart = cartProducts.find(item => item.id === product.id)
        if (!inCart) {
            setCartProducts(cartProducts => [...cartProducts, product])
            
        }
        console.log(product)
    }

    const deleteItem = (product) => {
        const cartItem = cartProducts.map(item => item.id)
        console.log(cartItem)
        console.log(product.id)
    }

    const deleteCartItems = () => {
        setCartProducts([])
    }



    const data = {
        cartProducts,
        setCartProducts,
        addToCart,
        deleteCartItems,
        deleteItem,
        setItemQuantity,
        itemQuantity
    }



    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;
export { CartContext }