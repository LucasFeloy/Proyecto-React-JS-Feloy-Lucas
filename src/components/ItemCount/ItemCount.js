import { useState, useContext } from "react";
import './ItemCount.css';
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, quantitySelected, detail }) => {

    const { addToCart, setItemQuantity } = useContext(CartContext)
    const [contador, setContador] = useState(0);

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)

        }
    }

    const substractNumber = () => {
        if (contador > 0) {
            setContador(contador - 1)
        };
    }

    const onAdd = () => {
        quantitySelected(contador)
        addToCart(detail)
        setItemQuantity(contador)
    }

    


    return (
        <div>
            <div className="itemCounter">
                <button onClick={substractNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <div className="itemCounter">{contador == stock && <p>¡Límite de Stock!</p>}</div>
            <div className="Agregar">
                <button onClick={onAdd} >AGREGAR</button>
            </div>
        </div>
    )
}

export default ItemCount;
