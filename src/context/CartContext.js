import { createContext, useState,useEffect } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])
    const [itemQuantity, setItemQuantity] = useState(0)

    console.log(itemQuantity)

    const addToCart = (product) => {
        product.quantity = itemQuantity
        let inCart = cartProducts.find(item => item.id === product.id)
        if (!inCart) {
            setCartProducts(cartProducts => [...cartProducts, product])

        }
        
    }

    const deleteItem = (product) => {
        let singleItem = cartProducts.find(item => item.id === product.id)
        if(singleItem===product.id){
            cartProducts.shift(product)        
            console.log(cartProducts)
            
            
        }
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