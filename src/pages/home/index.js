import React, { Component } from 'react'
import './style.css'

export default class Home extends Component{
    state = {
        images: [
            'img0.png',
            'img1.png',
            'img2.png',
            'img3.png'
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
                <h3>{images[slide]} - {slide}</h3>
                <button onClick={this.prevSlide}>Prev</button>
                <button onClick={this.nextSlide}>Next</button>
            </div>
        )
    }
}