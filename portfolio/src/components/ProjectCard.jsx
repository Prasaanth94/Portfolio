import styles from "./components_css/ProjectCard.module.css"

const ProjectCard = ({project}) => {
    return (
        <div className={styles.ProjectCard}>
            <h1 className={styles.project_title}>{project.title}</h1>
            <h2 className={styles.project_stack}>{project.stack}</h2>
            <a className={styles.project_link} href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link}
                </a>
        </div>
    );
};

export default ProjectCard;