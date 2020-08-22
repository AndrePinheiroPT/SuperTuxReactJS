import React from 'react'
import './style.css'

import discord from '../../img/discord.png'
import twitter from '../../img/Twitter.png'
import irc from '../../img/irc.png'
import github from '../../img/github.png'

const Footer = () => (
    <footer>
        <div className="footer-container">
            <a href="https://github.com/SuperTux/supertux/wiki">
                <img className="icon" src={github}></img>
            </a>
            <a href="https://kiwiirc.com/client/chat.freenode.net:+6697/?nick=Guest?#supertux">
                <img className="icon" src={irc}></img>
            </a>
            <br></br>
            <a href="https://twitter.com/supertux_team">
                <img className="icon" src={twitter}></img>
            </a>
            <a href="https://discord.gg/AcvtHWz">
                <img className="icon" src={discord}></img>
            </a>
        </div>
    </footer>
)

export default Footer