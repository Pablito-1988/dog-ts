import {Link} from 'react-router-dom'
import {ProductDetailType} from '../types/ProductTypes'

export const ProductDetailMap = ( props : ProductDetailType) => {
    const {productCategory,
         productName,
         productMainImg,
         price,
         productDescription
        } = props.info
  return (
    <>
                        <div className="imageContainer">
                            <div className="pathLinks">
                                <p className="pathItem">
                                    <Link to={"/"}>INICIO</Link> / <Link to={"/catalogo"}>CATEGORIAS</Link> /
                                    <Link to={`/categoria/${productCategory}`}> {productCategory}</Link> /
                                    {" "}{productName}
                                </p>
                            </div>
                            <img
                                className="productImg"
                                src={productMainImg.url}
                                alt={productCategory}
                            />
                        </div>
                        <div className="productData">
                            <p className="productName">{productName}</p>
                            <p className="productName">${price}</p>
                            <span className="divisor"></span>
                            <p className="productDescription">Descripción: {productDescription}</p>

                        </div>
                        <div>
                            <button className="orderButton"> <a
                                href={`https://wa.me/5491165480864?text=Me%20interesa%20este%20producto:%20${productName}`}
                                target={"_blank"}
                                rel="noreferrer"
                            >QUIERO ESTE PRODUCTO</a></button>
                        </div>
                    </>
  )
}
