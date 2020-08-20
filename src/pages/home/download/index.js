import React from 'react'
import './style.css'

import windows from '../../../img/windows.png'
import macos from '../../../img/macos.png'
import linux from '../../../img/linux.png'
import haywire from '../../../img/download/haywire1.png'

const Welcome = () => (
    <div className="slide-download">
        
        <div className="ground-castle"></div>
        <div className="top-castle"></div>

        <div className="center">
            <h1 className="middle-title">
                Download<br></br>
                the last releases!
            </h1>
            <br></br>
            <div className="windows-div">
                <img class="windows-img" src={windows}></img>
                <h2 className="single-windows">Windows</h2>
            </div><div className="linux-div">
                <img class="linux-img" src={linux}></img>
                <h2 className="single-linux">Linux</h2>
            </div><div className="macos-div">
                <img class="macos-img" src={macos}></img>
                <h2 className="single-macos ">MacOS</h2>
            </div>
        </div>

        <img class="haywire1" src={haywire}></img>
        <img class="haywire2" src={haywire}></img>
    </div>
)

export default Welcome