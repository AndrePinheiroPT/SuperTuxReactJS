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
                <a href='http://google.com'>Contact</a>
            </li>
            <li>
                <a href='http://google.com'>Screenshots</a>
            </li>
            <li>
                <a href='http://google.com'>Donate</a>
            </li>
        </ul>
        <ul className='navbar ext'>
            <li>
                <a href='http://google.com'>Chat</a>
            </li>
            <li>
                <a href='http://google.com'>Wiki</a>
            </li>
            <li>
                <a href='http://google.com'>Bugs</a>
            </li>
            <li>
                <a href='http://google.com'>Forum</a>
            </li>
            <li>
                <a href='http://google.com'>Discord</a>
            </li>
        </ul>
    </nav>
)

export default Navbar