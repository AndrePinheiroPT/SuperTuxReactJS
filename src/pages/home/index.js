import React, { Component } from 'react'
import './style.css'

import logo from '../../img/Logo.png'
import nav1 from '../../img/nav1.PNG'
import nav2 from '../../img/nav2.PNG'

export default class Home extends Component{
    state = {
        images: [
            logo,
            nav1,
            nav2
        ],
        slide: 0
    }

    prevSlide = () => {
        const { slide, images } = this.state
        
        let slideNumber = slide - 1

        if(slideNumber < 0){
            slideNumber = images.length - 1
        }

        this.setState({
            slide: slideNumber
        })

    }

    nextSlide = () => {
        let { slide, images } = this.state
        
        let slideNumber = slide + 1

        if(slideNumber >= images.length){
            slideNumber = 0
        }

        this.setState({
            slide: slideNumber
        })
    }

    render(){
        const { images, slide } = this.state

        return (
            <div className='slide-container'>
                <a href="http://google.com">
                    <img className="slide-img" src={images[slide]}></img>
                </a>
                <button className='prev' onClick={this.prevSlide}>&#10094;</button>
                <button className='next' onClick={this.nextSlide}>&#10095;</button>
            </div>
        )
    }
}