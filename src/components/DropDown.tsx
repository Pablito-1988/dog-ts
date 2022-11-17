/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = (props): JSX.Element => {
  const menuLInks = [
    {
      nombre: 'CATALOGO',
      ruta: '/'
    },
    {
      nombre: 'PUNTOS DE VENTA',
      ruta: '/puntos-de-venta'
    },
    {
      nombre: 'CONTACTO',
      ruta: '/contacto'
    }

  ]

  return (
        <div className='dropDownContent'>
            {menuLInks.map<JSX.Element>(e => {
              return (
                    <Link
                        key={e.nombre}
                        to={e.ruta}
                        // eslint-disable-next-line react/prop-types
                        onClick={props.change}
                        className='navLink' >
                        {e.nombre}
                    </Link>
              )
            })}
            <a
                className='navLink'
                href="https://www.instagram.com/dog.growshop"
                target={'_blank'}
                rel="noreferrer">
                <i className="fab fa-instagram">
                </i>
                {' '} INSTAGRAM
            </a>
        </div>
  )
}
export default Dropdown
