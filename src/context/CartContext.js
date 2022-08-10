import { createContext, useState } from "react";

const CartContext= createContext()

const CartProvider=({children})=>{
    const [cartProducts,setCartProducts]=useState([])

    const addToCart=(product)=>{
        setCartProducts(cartProducts=>[...cartProducts,product])
        
    }

    const data={
        cartProducts,
        setCartProducts,
        addToCart
    }
    console.log(cartProducts)


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;
export {CartContext}