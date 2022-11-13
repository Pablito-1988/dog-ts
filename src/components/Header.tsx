import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useRef } from "react";
import Dropdown from './DropDown';
import logo from '../assets/DogPNG.png'
import '../styles/Header.css'

export const Header = () => {
  const [DropdownMenu, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropdown = () => {
    setDropdown(!DropdownMenu);
    if(DropdownMenu === true) {
    dropdownRef.current.style.transform = "rotate(0deg)";
    }else{
      dropdownRef.current.style.transform = "rotate(180deg)";
    }
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
            <i
              ref={dropdownRef}
              id="arrowMenu"
              className="fas fa-angle-down"
            ></i>
          </div>
        </div>
        <div className="headerLogo">
          <Link to={"/"}>
            <img className="logoImg" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="headerSpace"></div>
      </header>
      {DropdownMenu ? <Dropdown change={handleDropdown} /> : null}
    </>
  );
}
