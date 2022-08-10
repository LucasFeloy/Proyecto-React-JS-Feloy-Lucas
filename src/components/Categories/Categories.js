import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './Categories.css';

const Categories = ({ data }) => {



    return (

        <div className="Category" >
            <Link to={`/item/${data.id}`}><img key={data.id} src={`/assets/${data.image}`} alt="imagen" /></Link>
            <div>
                <div className="category-p">
                <span>{data.title}</span>
                <p key={data.id}>${data.price}</p>
                </div>
                <ItemCount stock={data.stock} />

            </div>
        </div>

    )

}

export default Categories;