import "./ItemListContainer.css";

const ItemListContainer = ({ price, image }) => {
    return (
        <div className="ItemList">
            <img src={`assets/${image}`} alt="Imagen" />
            <p>${price}</p>
            <button>Comprar</button>

        </div>
    )

}

export default ItemListContainer;