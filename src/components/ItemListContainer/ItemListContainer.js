import { useState,useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import products from "../../utils/products.Mock";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ price, image, stock }) => {

    const [listProducts,setlistProducts]=useState([])

    const getProducts=new Promise((resolve,reject)=>{

        setTimeout(()=>{resolve(products)},2000)
        
    })

    useEffect(()=>{
        getProducts
        .then((res)=>{
            setlistProducts(res)
        })
    },[])

   
    return (
        <div className="ItemList">
            <ItemList dataProducts={listProducts}/>
          
            <ItemCount stock={stock}/>
            <button>Comprar</button>

        </div>
    )

}

export default ItemListContainer;