import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({ detail }) => {

    return (



        <div className="ItemDetail" >
            <img src={`assets/${detail.image}`} alt="imagen" />
            <div className="Detail">
                <span>{detail.title}</span>
                <p key={detail.id}>${detail.price}</p>
                <button>XL</button>
                <button>L</button>
                <button>M</button>
                <button>S</button>
                <button>XS</button>
                <ItemCount stock={detail.stock} />
                <button>Comprar</button>
            </div>
        </div>




    )
}

export default ItemDetail