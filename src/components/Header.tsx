import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Dropdown from './DropDown';
import '../styles/HeaderStyles.css'



export const Header = () => {
  const [DropdownMenu, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!DropdownMenu);

  };
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
          <Link to={"/"}>
            <img 
                 className="logoImg"
                 src={require('../assets/DogPNG.png')}
                 alt="logo"
             />
          </Link>
        </div>
        <div className="headerSpace"></div>
      </header>
      {DropdownMenu ? <Dropdown change={handleDropdown} /> : null}
    </>
  );
}
