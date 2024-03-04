import React from 'react'
import './Navbar.css'
import { AiOutlineBars } from "react-icons/ai"
import navLogo from '../../assets/navbar/navbarLogo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <div className=''>
      <div className={navToggle ? "container nav__wrapper" : "container"} onClick={() => {
        setNavToggle(false)
      }}>
      </div>
      <div className="container navbar">
        <div className="nav__logo">
          <a><img src={navLogo} alt="" /></a>
        </div>
        <div className="navbar__collection" >
          <ul className={navToggle ? " nav__collection activeNav " : "nav__collection"}>
            <li onClick={() => setNavToggle(false)} className="nav__routes"><a>Asosiy sahifa</a></li>
            <span className='cutter__navbar'>|</span>
            <li onClick={() => setNavToggle(false)} className="nav__routes"><a >Xizmatlar</a></li>
            <span className='cutter__navbar'>|</span>
            <li onClick={() => setNavToggle(false)} className="nav__routes"><a >Ishlarimiz</a></li>
          </ul>
          <span className="nav__routes"><AiOutlineBars onClick={() => setNavToggle(!navToggle)} className='navbar__bars' /></span>
        </div>
      </div>
    </div >
  )
}

export default Navbar