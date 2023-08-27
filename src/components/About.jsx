import './About.css'
import Avatar from '../images/avatar.jpg'
import { Link } from 'react-scroll';
import React, {useRef, useEffect, useState } from 'react';
import Reveal from './Reveal';
function About() {
   const {elementRef , shouldAnimate} = Reveal()
    return (
        <div id='About' className='main-about-container' ref={elementRef}>
            <div className="about-container">

                <h1 className={`about-header ${shouldAnimate ? 'reveal-side' : ''}`}>About Me</h1>
                <div className='about-wrapper'>
                    
                        <img className={ `about-avatar ${shouldAnimate ? 'reveal-side' : ''} ` }src={Avatar} />
                    
                    <div className={`about-text ${shouldAnimate ? 'reveal-up' : '' }`} >
                        <p>I am a self-taught front-end web developer from Tbilisi,Georgia. I've always been drawn to the concept of creating something valuable from scratch. Bringing digital ideas to life is my forte. I am hardworking and adaptable, with 2 years of experience in this industry and several completed projects.<br></br> <br></br>These are the languages/libraries/frameworks that I've worked with: <br></br><br></br>HTML, CSS , Javascript, React, Tailwind </p>
                        <Link
                    to="projects" 
                    smooth={true}
                    duration={1000} 
                >
                    <button className={`about-button fill ${shouldAnimate ? 'reveal-up' : ''}`} style={{animationDelay:'1500ms'}}>Projects</button>
                </Link></div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default About
