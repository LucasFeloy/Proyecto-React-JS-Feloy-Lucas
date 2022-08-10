import { useState, useContext } from "react";
import './ItemCount.css';
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, quantitySelected, detail }) => {

    const { addToCart } = useContext(CartContext)
    const [contador, setContador] = useState(0);

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)

        } else { document.getElementById("stockAlert").innerText = "Cantidad máxima de stock" }
    }

    const substractNumber = () => {
        if (contador > 0) {
            setContador(contador - 1)
        };
    }

    const onAdd = () => {
        quantitySelected(contador)
        addToCart(detail)

    }

    return (
        <div>
            <div className="itemCounter">
                <button onClick={substractNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <div className="Agregar">
                <button onClick={onAdd} >AGREGAR</button>
            </div>
        </div>
    )
}

export default ItemCount;