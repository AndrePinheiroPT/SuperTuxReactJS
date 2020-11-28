import React from 'react'
import './style.css'

import watersmall from '../../../img/contact/swimsmall.png'
import coins4x4 from '../../../img/contact/coins4x4.png'
import flySnowball from '../../../img/contact/flySnowball.png'

const Contact = () => (
    <div className="slide-contact">

        <img className="watersmall" src={watersmall}></img>
        <img className="coins4x4" src={coins4x4}></img>
        <img className="fly-snowball1" src={flySnowball}></img>
        <img className="fly-snowball2" src={flySnowball}></img>

        <div className="ground-cave"></div>
        <div className="ground-water"></div>
        <div className="top-cave"></div>

        <div className="info-list">
            <a href="https://kiwiirc.com/client/chat.freenode.net:+6697/?nick=Guest?#supertux"><button className="info-button">Chat</button></a>
            <a href="https://github.com/SuperTux/supertux/wiki"><button className="info-button">Wiki</button></a>
            <a href="https://twitter.com/supertux_team"><button className="info-button">Twitter</button></a>
            <br></br>
            <a href="https://discord.gg/AcvtHWz"><button className="info-button">Discord</button></a>
            <a href="supertux-devel@lists.lethargik.org"><button className="info-button">Email</button></a>
            <a href="http://forum.freegamedev.net/viewforum.php?f=66"><button className="info-button">Forum</button></a>
        </div>

        <h1 className="absolute-title">
            Connect to us<br></br>
            on social media!
        </h1>

        
    </div>
)

export default Contact