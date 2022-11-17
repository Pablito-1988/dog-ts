/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { useQuery } from 'react-query'
import { getAllCategories } from '../api/categoryApi'
import { Link } from 'react-router-dom'
import '../styles/ProductsStyle.css'
import { CategotyTypes } from '../types/CategoryTypes'

const Categories = (): JSX.Element => {
  const {
    data,
    isLoading
  } = useQuery(['category'], getAllCategories)

  return (
    <div className='categoriesContainer'>
      <h1 className='mainTitle'>CATALOGO</h1>
      {!isLoading && data.map((e: CategotyTypes, i: number) => {
        return (
          <div className="category" key={i}>
            <Link to={`/categoria/${e.categoryName}`} className='categoryLink'>
              <h3 className="categoryName">{e.categoryName}</h3>
              <img className="categoryImg" src={e.categoryImage.url} alt="categoria" />
            </Link>
          </div>
        )
      }
      )}
    </div>
  )
}

export default Categories
