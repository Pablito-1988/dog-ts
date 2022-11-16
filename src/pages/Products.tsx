/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { Product } from '../components/Product'
import { useParams } from 'react-router-dom'
import { getAllProducts } from '../api/productsApi'
import { useQuery } from 'react-query'
import '../styles/ProductsStyle.css'
import { ArrayofProducts } from '../types/ProductTypes'

export const Products: React.FC = () => {
  const category = useParams()
  const {
    data,
    isLoading
  } = useQuery(['products'], async () => await getAllProducts(category))

  if (isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  } else {
    return (
      <div className="productsWrapper">
        <h1>{category.categoria}</h1>
        <div className="allProducts">
          {data.map((product: ArrayofProducts) => {
            return (
              <Product
                key={product.productName}
                nombre={product.productName}
                categoria={product.productCategory}
                descripcion={product.productDescription}
                imagen={product.productMainImg.url}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
