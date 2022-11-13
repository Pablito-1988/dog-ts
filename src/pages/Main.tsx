import React from 'react'
import {Link} from 'react-router-dom'
import Categories from '../components/Categories'

export const Main = () => {
  return (
    <>
        <div>Hola soy main</div>
        <Link to={'/contacto'}><button>Contacto</button></Link>
        <Categories/>
    </>
    
  )
}
