import './Modal.css'
import { Link } from 'react-router-dom'



const Modal = ({ title, close, children }) => {
    return (
        <div className='modal'>
            <h3>{title}</h3>
            <div>{children}</div>
            <button onClick={() => close(false)}>CERRAR</button>
        </div>
    )
}

export default Modal