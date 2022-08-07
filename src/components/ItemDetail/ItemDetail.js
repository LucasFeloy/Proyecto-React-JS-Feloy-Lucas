import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { useState } from "react";

const ItemDetail = ({ detail }) => {

    const [quantitySelected, setQuantitySelected] = useState(0)

    return (



        <div className="ItemDetail" >
            <img src={`/assets/${detail.image}`} alt="imagen" />
            <div className="Detail">
                <span>{detail.title}</span>
                <p key={detail.id}>${detail.price}</p>
                <div>
                    <button>XL</button>
                    <button>L</button>
                    <button>M</button>
                    <button>S</button>
                    <button>XS</button>
                </div>
                {quantitySelected > 0 ? <button>TERMINAR COMPRA</button> : <ItemCount stock={detail.stock} quantitySelected={setQuantitySelected} />}


            </div>
        </div>




    )
}

export default ItemDetail