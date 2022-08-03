import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({ data }) => {

    return (



        <div className="ItemDetail" >
            <img src={`assets/${data.image}`} alt="imagen" />
            <div className="Detail">
                <span>{data.title}</span>
                <p key={data.id}>${data.price}</p>
                <button>XL</button>
                <button>L</button>
                <button>M</button>
                <button>S</button>
                <button>XS</button>
                <ItemCount stock={data.stock} />
                <button>Comprar</button>
            </div>
        </div>




    )
}

export default ItemDetail