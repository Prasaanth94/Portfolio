import styles from "./components_css/Projects.module.css"

const Projects = () => {

    const projects = [
        {title: 'Dessert Dash', stack: 'PERN', link: 'URL'},
        {title: 'Trippin Tales', stack: 'MERN', link: 'URL'},
        {title: 'ZoomKeys', stack: 'HTML , CSS, JS', link: 'URL'}
    ]
    return (
        <div className={styles.projects} id='projects'>
            {projects.map((project) => (
                <div key={project.id} className={styles.project}>
                    <h1>{project.title}</h1>
                    <h2>{project.stack}</h2>
                    <p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.link}
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Projects;