import ProjectCard from "./ProjectCard";
import {useState, useEffect} from 'react'
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
    const [animation, setAnimation] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const totalProjects = projects.length
    let currentPage = currentIndex + 1;
    let previousPage = currentPage - 1;
    if(previousPage < 1){
        previousPage = totalProjects
    }
    let nextPage = currentPage + 1;
    if(nextPage > totalProjects){
        nextPage = 1;
    }
    

    const handleNext = () => {
        setAnimation('slide_in_right');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
            setAnimation("");
            setIsAnimating(false);
        }, 500); // Match the duration of the animation
    };

    const handlePrevious = () => {
        setAnimation('slide_in_left');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
            setAnimation("");
            setIsAnimating(false);
        }, 500); // Match the duration of the animation
    };


return (
    <div className={styles.projects} id="projects">
    <h1 className={styles.title}>Projects</h1>
    <div className={styles.projectContainer}>
        <div className={`${styles.projectWrapper} ${styles[animation]}`}>
            {!isAnimating && <ProjectCard project={projects[currentIndex]} />}
            {isAnimating && <ProjectCard project={projects[(currentIndex + (animation === 'slide_in_right' ? 1 : -1) + projects.length) % projects.length]} />}
        </div>
    </div>
    <div>{previousPage}  <span className={styles.currentPage}>{currentPage}</span>  {nextPage}</div>
    <div className={styles.navigation}>
        <button onClick={handlePrevious} disabled={totalProjects <= 1} className={styles.nextBtn}>
            Previous
        </button>
        <button onClick={handleNext} disabled={totalProjects <= 1} className={styles.nextBtn}>
            Next
        </button>
    </div>
</div>
);
};

export default Projects;