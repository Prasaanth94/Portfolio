import ProjectCard from "./ProjectCard";
import {useState} from 'react'
import styles from "./components_css/Projects.module.css"

const Projects = () => {

    const projects = [
        {title: 'Dessert Dash', stack: 'PERN', link: 'URL'},
        {title: 'Trippin Tales', stack: 'MERN', link: 'URL'},
        {title: 'ZoomKeys', stack: 'HTML , CSS, JS', link: 'URL'}
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