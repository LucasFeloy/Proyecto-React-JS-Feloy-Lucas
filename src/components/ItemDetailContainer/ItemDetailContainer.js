import "./ItemDetailContainer.css";
import Products from "../../utils/products.Mock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const { id } = useParams()
    

    const filterById = () => {
        Products.some((product) => {
            if (product.id == id) {
                setProductDetail(product)
                console.log(productDetail)
            }
        })
    }

    useEffect(() => {
        filterById()
    }, [])


    return (
        <ItemDetail detail={productDetail} />
    )
}



export default ItemDetailContainer;