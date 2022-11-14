import { useQuery } from "react-query";
import { getAllCategories } from "../api/categoryApi";
import { Link } from 'react-router-dom'
import "../styles/ProductsStyle.css"

const Categories = () => {

    const { data,
        isLoading
    } = useQuery(["category"], getAllCategories)

    return (
        <div className='categoriesContainer'>
            <h1>CATALOGO</h1>
            {!isLoading && data.map((e,i) => {
                return (
                    <div className="category" key={i}>
                        <h3 className="categoryName">{e.categoryName}</h3>
                        <Link to={`/categoria/${e.categoryName}`}>
                            <img className="categoryImg" src={e.categoryImage.url} alt="categoria" />
                        </Link>
                    </div>
                );
            }
            )}
        </div>
    )
}




export default Categories