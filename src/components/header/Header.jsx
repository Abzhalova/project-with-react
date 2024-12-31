import React from 'react'
import './Header.css'

import logo from '../../assets/head-logo-1.svg'
import logo2 from '../../assets/head-logo-2.svg'


const Header = () => {
  return (
    <nav>
        <h3><a>DudeShape</a></h3>
        <div className='header-item'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contact</a></li>
        </div>
        <div className='nav-img'>
          <a><img src={logo} alt="Head Logo 1" /></a>
          <a><img src={logo2} alt="Head Logo 2"/></a>
           
        </div>
    </nav>
  )
}

export default Header