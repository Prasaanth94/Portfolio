import styles from "./components_css/ProjectCard.module.css"
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({project}) => {

    return (
        <div className={`${styles.ProjectCard} `}>
            <div className={styles.projectContent}>
                {project.deployed_link ? (
                    <iframe 
                        src={project.deployed_link} 
                        title={project.title} 
                        className={styles.projectImage}
                        sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                ) : (
                    <img className={styles.projectImage} src={project.img} alt="project image" />
                )}
                <div className={styles.projectText}>
                    <h1 className={styles.project_title}>{project.title}</h1>
                    <h2 className={styles.project_stack}>{project.stack}</h2>
                    <p className={styles.project_description}>{project.description}</p>
                    <p className={styles.codes}>View the codes :   <a className={styles.project_link} href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaGithub  size={50} color="white"/>
                    </a></p>
                    {project.deployed_link && (
                        <a className={styles.deployed_link} href={project.deployed_link} target="_blank" rel="noopener noreferrer">Try The Game Here!</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;