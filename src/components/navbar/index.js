import React from 'react'
import './style.css'

const Navbar = () => (
    <nav>
        <ul className='navbar items'>
            <a href='http://google.com'>
                <li>Home</li>
            </a>
            <a href='http://google.com'>
                <li>Downloads</li>
            </a>
            <a href='http://google.com'>
                <li>News</li>
            </a>
            <a href='http://google.com'>
                <li>About</li>
            </a>
            <a href='http://google.com'>
                <li>Images</li>
            </a>
            <a href='http://google.com'>
                <li>Contact</li>
            </a>
            <a className="donate" href='http://google.com'>
                <li>Donate</li>
            </a>
            
        </ul>
    </nav>
)

export default Navbar