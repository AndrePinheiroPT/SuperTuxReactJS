import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from  'react-router-dom'
import './style.css'

import Welcome from './welcome'
import Download from './download'

export default class Home extends Component{
    state = {
        slidesList: [
            'welcome-slide',
            'download-slide',
            'welcome-slide2',
            'welcome-slide3'
        ],
        slide: 0
    }

    prevSlide = () => {
        const { slide, slidesList } = this.state
        let slideNumber = slide - 1

        if(slideNumber < 0){
            slideNumber = slidesList.length - 1
        }

        this.setState({
            slide: slideNumber
        })
    }

    nextSlide = () => {
        const { slide, slidesList } = this.state
        let slideNumber = slide + 1

        if(slideNumber >= slidesList.length){
            slideNumber = 0
        }
        
        this.setState({
            slide: slideNumber
        }) 
    }

    render(){
        const { slidesList, slide } = this.state
        return (
            <>
                <BrowserRouter >
                    <div className='slide-container'>
                        <Switch>
                            <Route path="/welcome-slide">
                                <Welcome />
                            </Route>
                            <Route path="/download-slide">
                                <Download />
                            </Route>
                        </Switch>
                        <Redirect to={`/${slidesList[slide]}`}/>
                        <button className='prev' onClick={this.prevSlide}>&#10094;</button>
                        <button className='next' onClick={this.nextSlide}>&#10095;</button>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}