import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartProducts.css';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import db from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const CartProducts = () => {


    const { setCartProducts, cartProducts, deleteCartItems, deleteItem } = useContext(CartContext)

    const priceItems = cartProducts.map((product) => product.price * product.contador)

    const price = priceItems.reduce((acum, el) => acum + el, 0)

    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                size: product.waist
            }

        }),
        buyer: {},
        total: price
    })

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({ ...order, buyer: formData })

    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, "ordenes")
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
    }

    const closeOrder = () => {
        setShowModal()
        
    }

    return (
        <>
            {cartProducts.map((product) => {

                return (

                    <div className='CartProducts'>
                        <img src={`/assets/${product.image}`} alt="imagen" />
                        <div className="Detail">
                            <span key={product.id}>{product.title}</span>
                            <p >${product.price}</p>
                            <div>
                                <p>TALLE: {product.waist}</p>
                                <p>CANTIDAD:{product.contador}</p>
                                <p>SUBTOTAL:${product.contador * product.price}</p>
                            </div>
                            <div>
                                <button key={product.id} onClick={() => deleteItem(product.id)} >ELIMINAR PRODUCTO</button>
                            </div>
                        </div>
                    </div>

                )
            })}
            {cartProducts.length > 0 ?
                <div>
                    <p className='precio'>PRECIO FINAL=${price}</p>
                    <div className='botonCompra'>
                        <button onClick={() => setShowModal(true)} >TERMINAR COMPRA</button>
                        <button onClick={deleteCartItems}>VACIAR CARRITO</button>
                    </div></div> : <div></div>}
            {cartProducts.length == 0 && <div className='carritoVacio'><p>NO HAY PRODUCTOS EN TU CARRITO!!!, CLICKEA EN LA IMAGEN PARA ELEGIR TUS REMERAS &#128521; &#8681;</p>
                <Link to='/'><img src='/assets/naruto.jpg' alt='imagen' /></Link>
            </div>}
            <div className='modal-box'>
                {showModal &&
                    <Modal title="INGRESA TUS DATOS PARA FINALIZAR LA COMPRA" close={closeOrder}>

                        {success ? (<><h2>ORDEN GENERADA</h2>
                            <p>{success}</p>
                            <img src='../assets/pokemon-pikachu-eevee.webp' alt='imagen' /></>) : (
                            <form onSubmit={submitData}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Ingrese Nombre y Apellido'
                                    value={formData.name}
                                    onChange={handleChange} />
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder='Ingrese Teléfono'
                                    value={formData.phone}
                                    onChange={handleChange} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Ingrese Email'
                                    value={formData.email}
                                    onChange={handleChange} />
                                <button onClick={()=>setCartProducts([])} type='submit'>ENVIAR</button>
                            </form>)}
                    </Modal>}
            </div>
        </>)
}

export default CartProducts
