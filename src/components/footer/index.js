import React from 'react'
import './style.css'

import discord from '../../img/discord.png'
import twitter from '../../img/Twitter.png'
import irc from '../../img/irc.png'
import github from '../../img/github.png'

const Footer = () => (
    <footer>
        <div className="footer-container">
            <a href="http://google.com">
                <img className="icon" src={github}></img>
            </a>
            <a href="http://google.com">
                <img className="icon" src={irc}></img>
            </a>
            <br></br>
            <a href="http://google.com">
                <img className="icon" src={twitter}></img>
            </a>
            <a href="http://google.com">
                <img className="icon" src={discord}></img>
            </a>
        </div>
    </footer>
)

export default Footer