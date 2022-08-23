import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const { id } = useParams()


    useEffect(() => {
        getProduct()
            .then((res) => {
                setProductDetail(res)
            })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }
    return (
        <ItemDetail detail={productDetail} />
    )
}



export default ItemDetailContainer;