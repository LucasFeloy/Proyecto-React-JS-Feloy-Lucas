import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock}) => {

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
        <div className="itemCounter">
            <button onClick={substractNumber}>-</button>
            <p>{contador}</p>
            <button onClick={addNumber}>+</button>
            
        </div>
    )
}

export default ItemCount;