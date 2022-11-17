import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductsStyle.css'
import { Props } from '../types/ProductTypes'

export const Product = (props: Props): ReactElement<Props> => {
  const { nombre, categoria, imagen } = props
  return (
        <div className='productContainer'>
            <img
                className='productMainImg'
                src={imagen}
                alt={categoria} />
            <p className='productNameP'>{nombre}</p>
            <Link to={`/producto/${nombre}`} >
                <button className='moreInfoButton'>Mas info</button>
            </Link>
        </div>
  )
}
