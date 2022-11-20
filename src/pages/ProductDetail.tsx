/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getProductDetail } from '../api/productsApi'
import { ProductDetailMap } from '../components/ProductDetailContent'
import '../styles/ProductsStyle.css'

export const ProductDetail: React.FC = () => {
  const item = useParams()
  const {
    data,
    isLoading
  } = useQuery(['detail'], async () => await getProductDetail(item))

  if (isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  } else {
    return (
      <div className="productDetailContainer">
        {!data
          ? (
            <h1>Cargando...</h1>
          )
          : (
            <>
              <ProductDetailMap info={data[0]} />
            </>
          )}
      </div>
    )
  }
}
