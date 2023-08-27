import './Hero.css'
import { Link } from 'react-scroll';
function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <h1 className="hero-title">Hi, My name is <span>Bacho Karashvili </span>
                    Front End Developer</h1>
                    <Link
                    to="About" // Replace with the ID of the section you want to scroll to
                    smooth={true}
                    duration={1000} // Duration of the scroll animation in milliseconds
                >
                    <button className='hero-button fill'>Know more</button>
                </Link>
                </div>
        </div>
    )
}

export default Hero
