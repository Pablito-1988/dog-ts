/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

import Dropdown from './DropDown'
import '../styles/HeaderStyles.css'

export const Header = (): ReactElement => {
  const [DropdownMenu, setDropdown] = useState<boolean>(false)
  const handleDropdown = () => {
    setDropdown(!DropdownMenu)
  }
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="iconContainer">
            <i
              onClick={handleDropdown}
              id="burgerMenu"
              className="fas fa-bars"
            ></i>
          </div>
        </div>
        <div className="headerLogo">
          <Link to={'/'}>
            <img
              className="logoImg"
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={require('../assets/DogPNG.png')}
              alt="logo"
            />
          </Link>
        </div>
        <div className="headerSpace"></div>
      </header>
      {DropdownMenu ? <Dropdown change={handleDropdown} /> : null}
    </>
  )
}
