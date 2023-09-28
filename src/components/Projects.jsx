import React from 'react';
import Reveal from './Reveal';
import './Projects.css'
import { passwordGeneratorData, vanLifeData, weatherApp, netflixApp } from './Projectsdetails'

export default function Projects() {
    const { elementRef, shouldAnimate } = Reveal()

    const allProjects = [...passwordGeneratorData, ...vanLifeData, ...weatherApp, ...netflixApp];


    const projects = allProjects.map((el, index) => (
        <div className={`projects-container ${shouldAnimate ? 'reveal-side' : ''}`} style={{ animationDelay: '1200ms' }} Key={index} ref={elementRef}>
            <div className='project-header-container'>
                <img className='projects-header-photo' src={el.src} alt='header-img' />
                <div className='project-description'>
                    <div className='project-description-header'>
                        <h2>{el.title} </h2>
                        <img src={el.headerImg} alt="title-img" className='header-title-image' />
                    </div>
                    <h4 className='project-description-paragraph'>{el.projectParagraph}</h4>
                    <div className='demo'>
                        <a href={el.demoLink} target="_blank" rel='noreferrer'>Live Demo </a>
                        <a href={el.codeLink} target='_blank' rel='noreferrer'>Code <img src={el.gitImg} alt='git-img' /></a>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <div id="projects" className={`main-projects-container ${shouldAnimate ? 'reveal-side' : ''}`} >
                <h1 style={{ animationDelay: '500ms' }}>Projects</h1>

                {projects}

            </div>
        </>

    )
}