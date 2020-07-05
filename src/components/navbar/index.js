import React from 'react'
import './style.css'

const Navbar = () => (
    <nav>
        <ul className='navbar items'>
            <li>
                <a href='http://google.com'>Home</a>
            </li>
            <li>
                <a href='http://google.com'>Downloads</a>
            </li>
            <li>
                <a href='http://google.com'>News</a>
            </li>
            <li>
                <a href='http://google.com'>About</a>
            </li>
            <li>
                <a href='http://google.com'>Images</a>
            </li>
            <li>
                <a href='http://google.com'>Contact</a>
            </li>
            <li>
                <a className="donate" href='http://google.com'>Donate</a>
            </li>
        </ul>
    </nav>
)

export default Navbar