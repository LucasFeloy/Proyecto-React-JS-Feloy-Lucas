import { useState } from "react";
import "./ItemListContainer.css";


const ItemListContainer = ({ price, image, stock }) => {
    const [contador, setContador] = useState(1);

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)

        } else { document.getElementById("stockAlert").innerText = "Cantidad máxima de stock" }
    }

    const substractNumber = () => {
        if (contador > 1) {
            setContador(contador - 1)
        };
    }

    return (
        <div className="ItemList">
            <img src={`assets/${image}`} alt="Imagen" />
            <p>${price}</p>
            <div className="itemCounter">
                <button onClick={substractNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
                <p id="stockAlert"></p>
            </div>
            <button>Comprar</button>

        </div>
    )

}

export default ItemListContainer;