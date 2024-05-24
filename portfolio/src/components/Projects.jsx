import ProjectCard from "./ProjectCard";
import {useState} from 'react'
import styles from "./components_css/Projects.module.css"
import DessertDash from "/DessertDash.gif"
import TrippinTales from "/TrippingTales.gif"

const Projects = () => {

    const projects = [
        {title: 'Dessert Dash', stack: 'PERN STACK', link: 'https://github.com/Prasaanth94/DessertDash', deployed_link: "", img: DessertDash, description: "A solo project trying to replicate an ecommerce styled website. The idea for the project was to create a website where users can log in to order desserts from their favourite shop, and go down for collection. My favourtie part of the project was implementing the geo location of the users, where user can find desserts shop nearby from their current location. All shop data was uploaded to POSTGRESQL"},
        {title: 'Trippin Tales', stack: 'MERN STACK', link: 'https://github.com/Prasaanth94/TrippinTales', deployed_link: "", img: TrippinTales, description: 'A group project where we decided to try and create a social media blog styled webpage catered towards travellers. Replicating features like following users, liking posts and commenting on users posts. '},
        {title: 'ZoomKeys', stack: 'HTML, CSS, JS', link: 'https://github.com/Prasaanth94/keysZoom', deployed_link: "https://prasaanth94.github.io/keysZoom/GameCodes/", img: 'URL', description: 'A game i made to challenge the users agility and precision, putting their reaction speed and hand-eye coordination to the test. Challenge your friends to see who can get a higher score. Try the game on the left or the link below! '}
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevious = () =>{
        setCurrentIndex((prevIndex)=> (prevIndex -1 + projects.length) % projects.length)
;    }

    return (
        <div className={styles.projects} id='projects'>
            <h1 className={styles.title}>Projects</h1>
        <ProjectCard project={projects[currentIndex]} />
        <div className={styles.navigation}>
            <button onClick={handlePrevious} disabled={projects.length <= 1}>
                Previous
            </button>
            <button onClick={handleNext} disabled={projects.length <= 1}>
                Next
            </button>
        </div>
    </div>
);
};

export default Projects;