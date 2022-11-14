import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import { getProductDetail } from "../api/productsApi"
import {Link} from 'react-router-dom'
import "../styles/ProductsStyle.css"

export const ProductDetail = () => {
    const item = useParams();
    const { data,
        isLoading,
    } = useQuery(["detail"], () => getProductDetail(item))
    console.log(data)

    if (isLoading) {
        return (
            <>
                <p>Loading</p>
            </>
        )
    } else {


        return (
            <div className="productDetailContainer">
                {!data ? (
                    <h1>Cargando...</h1>
                ) : (
                    <>
                        <div className="imageContainer">
                            <div className="pathLinks">
                                <p className="pathItem">
                                    <Link to={"/"}>INICIO</Link> / <Link to={"/catalogo"}>CATEGORIAS</Link> /
                                    <Link to={`/categoria/${data[0].productCategory}`}> {data[0].productCategory}</Link> /
                                    {" "}{data[0].productName}
                                </p>
                            </div>
                            <img
                                className="productImg"
                                src={data[0].productMainImg.url}
                                alt={data[0].productCategory}
                            />
                        </div>
                        {/* <span className="divisor"></span> */}
                        <div className="productData">
                            <p className="productName">{data[0].productName}</p>
                            <p className="productName">${data[0].price}</p>
                            <span className="divisor"></span>
                            <p className="productDescription">Descripción: {data[0].productDescription}</p>

                        </div>
                        <div>
                            <button className="orderButton"> <a
                                href={`https://wa.me/5491165480864?text=Me%20interesa%20este%20producto:%20${data[0].productName}`}
                                target={"_blank"}
                                rel="noreferrer"
                            >QUIERO ESTE PRODUCTO</a></button>
                        </div>
                    </>
                )}
            </div>
        );
    }


};

