import React from 'react'
import './style.css'
import logo from '../../img/Logo.png' 

const Header = () => (
    <header>
        <a href="http://google.com">
            <img src={logo}></img>
        </a>
    </header>
)

export default Header