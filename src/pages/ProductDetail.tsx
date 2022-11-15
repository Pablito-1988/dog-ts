import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import { getProductDetail } from "../api/productsApi"
import { ProductDetailMap } from '../components/ProductDetailContent';
import "../styles/ProductsStyle.css"

export const ProductDetail = () => {
    const item = useParams();
    const { data,
        isLoading,
    } = useQuery(["detail"], () => getProductDetail(item))

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
                        <ProductDetailMap info={data[0]} />
                    </>
                )}
            </div>
        );
    }


};

