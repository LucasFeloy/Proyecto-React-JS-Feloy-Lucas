import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './Categories.css';

const Categories = ({ data }) => {



    return (

        <div className="Category" >
            <Link to={`/item/${data.id}`}><img src={`/assets/${data.image}`} alt="imagen" /></Link>
            <div>
                <span>{data.title}</span>
                <p key={data.id}>${data.price}</p>
                <ItemCount stock={data.stock} />

            </div>
        </div>

    )

}

export default Categories;