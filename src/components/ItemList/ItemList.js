import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemList = ({ dataProducts }) => {
    return(
    <>
    <img src={dataProducts.image} alt="imagen"/>
    <p key={dataProducts.id}>{dataProducts.price}</p>
    </>
    )
}


export default ItemList;
