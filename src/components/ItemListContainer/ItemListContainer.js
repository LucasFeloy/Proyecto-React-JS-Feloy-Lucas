import { useState,useEffect } from "react";
import Products from "../../utils/products.Mock";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import productDetail from "../../utils/productDetail.Mock.js";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = () => {

   {/* const [listProducts,setlistProducts]=useState([])

    const getProducts=new Promise((resolve,reject)=>{

        setTimeout(()=>{resolve(Products)},2000)
        
    })

    useEffect(()=>{
        getProducts
        .then((res)=>{
            setlistProducts(res)
        })
    },[])*/}

    const [itemDetail,setItemDetail]=useState([])

    const getItemDetail=new Promise((resolve,reject)=>{

        setTimeout(()=>{resolve(productDetail)},2000)
        
    })

    useEffect(()=>{
        getItemDetail
        .then((res)=>{
            setItemDetail(res)
            
        })
    },[])

    
   
    return (
        <div className="ItemDetail">
           {/* <ItemList dataProducts={listProducts}/>*/}
            <ItemDetailContainer detailProduct={itemDetail} />
        </div>
    )

}

export default ItemListContainer;