/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from 'react'
import { Link } from 'react-router-dom'

interface props {
  links: Array<{
    nombre: string
    ruta: string
  }>
}

export const NavBar = ({ links }: props): JSX.Element => {
  return (
    <>
      <nav className='navBar'>
        <ul className='navBarUl'>
          {links.map((e, i) => {
            return (
              <li key={i}>
                <Link to={e.ruta}>
                  <p className='navBarLinkName'>{e.nombre}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
