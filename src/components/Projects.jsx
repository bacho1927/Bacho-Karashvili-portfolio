import React, {useRef, useEffect, useState } from 'react';
import Reveal from './Reveal';
import './Projects.css'
import { passwordGeneratorData, vanLifeData } from './Projectsdetails'

export default function Projects(){
    const {elementRef , shouldAnimate} = Reveal()

    const allProjects = [...passwordGeneratorData, ...vanLifeData];


    const projects = allProjects.map((el, index) => (
        <div className={`projects-container ${shouldAnimate ? 'reveal-side' : ''}`} style={{animationDelay: '1200ms'}} Key={index} ref={elementRef}>
            <div className='project-header-container'>
                <img className='projects-header-photo' src={el.src} />
                <div className='project-description'>
                    <h2>{el.title} <img src={el.headerImg} /></h2>
                    <h4>{el.projectParagraph}</h4>
                    <div className='demo'>
                        <a href={el.demoLink} target="_blank" >Live Demo </a>
                        <a href={el.codeLink} target='_blank'>Code <img src={el.gitImg} /></a>
                    </div>
                </div>
            </div>
        </div>
    ))
    return(
        <>
        <div id="projects" className={`main-projects-container ${shouldAnimate ? 'reveal-side' : ''}`} >
            <h1 style={{animationDelay: '500ms'}}>Projects</h1>

            {projects}

        </div>
    </>
        
    )
}