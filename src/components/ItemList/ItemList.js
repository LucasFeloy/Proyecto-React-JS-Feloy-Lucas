import ItemCount from "../ItemCount/ItemCount";


const ItemList = ({ dataProducts }) => {
    return(
        <>
        {dataProducts.map((product)=>{
           
            return(
             
                < >
                <img src={`assets/${product.image}`} alt="imagen"/>
                <span>{product.title}</span>
                <p key={product.id}>{product.price}</p>
                <ItemCount stock={product.stock}/>
                <button>Comprar</button>
                </>
            )
        })}
        </>
  
    )
}


export default ItemList;
