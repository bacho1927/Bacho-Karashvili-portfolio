import github from '../images/github.png'
import passwordGenerator from '../images/password-generator.png'
import vanLife from '../images/van-life.png'
import vanPhoto from '../images/van-photo.jpg'
import lock from '../images/lock.jpg'
import weather from '../images/weather.png'
import cloud from '../images/cloud.jpg'
import netflixPhoto from '../images/netflix.png'
import netflixLogo from '../images/netflixLogo.png'

const passwordGeneratorData = [
    {
        src: passwordGenerator,
        title: 'Password Generator',
        headerImg: lock,
        projectParagraph: 'Introducing the Ultimate Password Generator App: Your Personalized Defender in the Digital Realm!',
        gitImg: github,
        codeLink: "https://github.com/bacho1927/Password-generator-app",
        demoLink: "https://bacho-karashvili-password-generator.netlify.app/"
    }
]
const vanLifeData = [
    {
        src: vanLife,
        title: '#VANLIFE Website',
        headerImg: vanPhoto,
        projectParagraph: ' Rent the perfect van to make your perfect road trip.',
        gitImg: github,
        codeLink: "https://github.com/bacho1927/Van-life",
        demoLink: "https://bacho-karashvili-van-life.netlify.app/"
    }
]

const weatherApp = [
    {
        src: weather,
        title: 'Weather App',
        headerImg: cloud,
        projectParagraph: ' Welcome to Weather App: Your Personal Weather Companion',
        gitImg: github,
        codeLink: "https://github.com/bacho1927/weather-app",
        demoLink: "https://bacho-karashvili-weather-app.netlify.app/"
    }

]

const netflixApp = [
    {
        src: netflixPhoto,
        title: 'Netflix Website',
        headerImg: netflixLogo,
        projectParagraph: 'Netflix:  Welcome to the world of endless entertainment',
        gitImg: github,
        codeLink: "https://github.com/bacho1927/netflix-app",
        demoLink: "https://bacho-karashvili-netflix-app.netlify.app/"
    }
]
export { passwordGeneratorData, vanLifeData, weatherApp, netflixApp }