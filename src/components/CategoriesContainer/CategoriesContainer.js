import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../utils/products.Mock";
import Categories from "../Categories/Categories";
import "./CategoriesContainer.css";

const CategoriesContainer = () => {

    const [category, setCategory] = useState({})

    const { id } = useParams()


    const filterByCategories = () => Products.filter((e) => {
        if (e.category == id) {

            setCategory(e)
        }


    })

    useEffect(() => {
        filterByCategories()
    }, [])


    return (
        <div className="Categories">
            <Categories data={category} />
        </div>
    )





}

export default CategoriesContainer;