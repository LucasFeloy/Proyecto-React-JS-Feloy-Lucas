import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemList.css";
const ItemList = ({ dataProducts }) => {
    return (
        <>
            {dataProducts.map((product) => {

                return (

                    <div className="ItemCard" >
                        <Link to={`/item/${product.id}`}><img src={`assets/${product.image}`} alt="imagen" /></Link>
                        <div>
                        <span>{product.title}</span>
                        <p key={product.id}>${product.price}</p>
                        <ItemCount stock={product.stock} />
                        
                        </div>
                    </div>
                )
            })}
        </>

    )
}


export default ItemList;
