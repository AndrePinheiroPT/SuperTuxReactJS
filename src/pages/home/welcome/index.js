import React from 'react'
import './style.css'

import tux from '../../../img/welcome/Bigtuxrun1.png'
import jumpy from '../../../img/welcome/down-1.png'
import snowball from '../../../img/welcome/snowball-0.png'
import ice from '../../../img/welcome/ice.png'
import coin from '../../../img/welcome/coin.png'
import block from '../../../img/welcome/block.png'

const Welcome = () => (
    <div className="slide-welcome">
        <div className="div-welcome">
            <h1>
                Welcome to the <br></br>
                Supertux Website
            </h1>
            <p>
                SuperTux is a open-source classic 2D jump'n run <br></br>
                sidescroller game in a style similar to the original Super Mario games. <br></br>
                <a href="http://google.com">Learn more…</a>
            </p>
        </div>
        
        <img className="ice" src={ice}></img>
        <div className="ground-snow"></div>
        <img className="tux-running" src={tux}></img>
        <img className="jumpy" src={jumpy}></img>
        <img className="snowball" src={snowball}></img>
        <img className="coin1" src={coin}></img>
        <img className="coin2" src={coin}></img>
        <img className="block" src={block}></img>
    </div>
)

export default Welcome