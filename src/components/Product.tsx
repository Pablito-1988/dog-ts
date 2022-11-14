import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/ProductsStyle.css"

export const Product = (props) => {
  const  {nombre , categoria, imagen } = props 
    return (
        <div className='productContainer'>
            <img className='productMainImg' src={imagen} alt={categoria} />
            <p>{nombre}</p>
            <Link to={`/producto/${nombre}`} >
            <button className='moreInfoButton'>Mas info</button>
            </Link>
        </div>
    );
}
