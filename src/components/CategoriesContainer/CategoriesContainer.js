import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../utils/products.Mock";
import Categories from "../Categories/Categories";
import "./CategoriesContainer.css";

const CategoriesContainer = () => {

    const [category, setCategory] = useState();

    const { id } = useParams()


    const filterByCategories = () => {
        const filteredProducts = Products.filter((product) => product.category === id);
        setCategory(filteredProducts);
    };




    useEffect(() => {
        filterByCategories()
    }, [id])


    return (
        category &&(
        <div className="Categories">
            {category.map((product) => (<Categories data={product} />))}
        </div>)

    )





}

export default CategoriesContainer;