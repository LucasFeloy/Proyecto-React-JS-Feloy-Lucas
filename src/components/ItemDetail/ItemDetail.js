import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ detail }) => {

    const [quantitySelected, setQuantitySelected] = useState(0)
    const { setWaist,waist} = useContext(CartContext)

    const waistList = ['XL', 'L', 'M', 'S', 'XS']


    return (



        <div className="ItemDetail" >
            <img src={`/assets/${detail.image}`} alt="imagen" />
            <div className="Detail">
                <span>{detail.title}</span>
                <p key={detail.id}>${detail.price}</p>
                <div>
                    {waistList.map(item => {
                        return (
                            <button className={waist === item ? 'checked' : ''} onClick={() => setWaist(item)}>{item}</button>
                        )
                    })}
                </div>
                {quantitySelected > 0 ? <Link to='/CartWidget/CartProducts'><div><button>IR AL CARRITO</button></div></Link> : <ItemCount stock={detail.stock} quantitySelected={setQuantitySelected} detail={detail} />}


            </div>
        </div>




    )
}

export default ItemDetail