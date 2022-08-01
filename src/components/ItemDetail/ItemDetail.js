import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail=({detail})=>{
   
    return(
        <>
        {detail.map((item)=>{
           
            return(
             
                <div className="ItemDetail" >
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
                </div>
            )
        })}
        </>
  
    )
}

export default ItemDetail