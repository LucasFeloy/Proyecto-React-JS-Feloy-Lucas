import { useState, useEffect } from "react";
import Products from "../../utils/products.Mock";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";






const ItemListContainer = () => {

    const [listProducts, setlistProducts] = useState([])

    const getProducts = new Promise((resolve, reject) => {

        setTimeout(() => { resolve(Products) }, 2000)

    })

    useEffect(() => {
        getProducts
            .then((res) => {
                setlistProducts(res)


            })
    }, [])


   
    return (

        
        <div className="ItemList">
            <ItemList dataProducts={listProducts} />
                   

        </div>
    )

}

export default ItemListContainer;