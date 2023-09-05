import './Contact.css'
import Reveal from './Reveal'
import React from 'react';
import { Link } from 'react-scroll'
export default function Contact() {
    const { elementRef, shouldAnimate } = Reveal()

    return (
        <>
            <div className='main-contact-container' >
                <h1 className={`contact-header ${shouldAnimate ? 'reveal-side' : ''}`} ref={elementRef} style={{ animationDelay: '1000ms' }}>Contact</h1>
                <div className={`contact-container ${shouldAnimate ? 'reveal-up' : ''}`} style={{ animationDelay: '2000ms' }} >
                    <h2 >Would you like to work with me?</h2>
                    <a className='contact' href="mailto:Bacho.karashvili@gmail.com">Email: Bacho.Karashvili@gmail.com</a>
                    <a className='contact' href="https://www.linkedin.com/in/bacho-karashvili/">LinkedIn: linkedin.com/in/bacho-karashvili</a>

                </div>
                <Link

                    to="hero"
                    smooth={true}
                    duration={500}
                ><div className={`top ${shouldAnimate ? 'reveal-up' : ''}`} style={{ animationDelay: '2500ms' }}>^</div></Link>
            </div>

        </>
    )
}