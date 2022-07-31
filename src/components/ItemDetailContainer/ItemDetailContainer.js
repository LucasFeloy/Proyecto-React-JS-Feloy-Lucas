import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetailContainer = ({detailProduct}) => {
    return(
        <>
        {detailProduct.map((item)=>{
           
            return(
             
                < >
                <img src={`assets/${item.image}`} alt="imagen"/>
                <div className="Detail">
                <span>{item.title}</span>
                <p key={item.id}>${item.price}</p>
                <button>XL</button>
                <button>L</button>
                <button>M</button>
                <button>S</button>
                <button>XS</button>
                <ItemCount stock={item.stock}/>
                <button>Comprar</button>
                </div>
                </>
            )
        })}
        </>
  
    )
}

export default ItemDetailContainer;