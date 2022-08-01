import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemList = ({ dataProducts }) => {
    return (
        <>
            {dataProducts.map((product) => {

                return (

                    <div className="ItemCard" >
                        <Link to="/remeras/detalle"><img src={`assets/${product.image}`} alt="imagen" /></Link>
                        <span>{product.title}</span>
                        <p key={product.id}>${product.price}</p>
                        <ItemCount stock={product.stock} />
                        <button>Comprar</button>
                    </div>
                )
            })}
        </>

    )
}


export default ItemList;
