import React from 'react'
import './style.css'

import tux from '../../../img/welcome/Bigtuxrun1.png'

const Welcome = () => (
    <div className="slide-welcome">
        <h1>
            Welcome to the supertux website
        </h1>
        <div className="ground"></div>
        <img className="tux-running" src={tux}></img>
    </div>
)

export default Welcome