import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebaseConfig";





const ItemListContainer = () => {

    const [listProducts, setlistProducts] = useState([])

    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product

        })
        return productList

    }

    useEffect(() => {
        getProducts()
        .then((res)=>{setlistProducts(res)})
       
    }, [])



    return (


        <div className="ItemList">
            <ItemList dataProducts={listProducts} />


        </div>
    )

}

export default ItemListContainer;