import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock,quantitySelected }) => {

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

    const onAdd=()=>{
            quantitySelected(contador)
    }

    return (
        <>
            <div className="itemCounter">
                <button onClick={substractNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <div className="Agregar">
                <button onClick={onAdd}>AGREGAR</button>
            </div>
        </>
    )
}

export default ItemCount;