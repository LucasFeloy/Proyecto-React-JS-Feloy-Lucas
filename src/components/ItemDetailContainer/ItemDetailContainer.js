import "./ItemDetailContainer.css";
import Products from "../../utils/products.Mock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect,useState } from "react";

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail]=useState([])

        const getProductDetail=new Promise((resolve,reject)=>{
    
            setTimeout(()=>{resolve(Products)},2000)
            
        })
    
        useEffect(()=>{
            getProductDetail
            .then((res)=>{
                setProductDetail(res)
                
            })
        },[])

        return(
            <ItemDetail detail={productDetail}/>
        )
        }
   


export default ItemDetailContainer;