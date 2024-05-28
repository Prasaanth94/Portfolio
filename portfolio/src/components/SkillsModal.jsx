import ReactDom from "react-dom"
import {Tooltip} from "react-tooltip"
import styles from "../components/components_css/SkillsModal.module.css"
import HTMLIcon from "../assets/skillsIcons/icons8-html.svg"
import CSSIcon from "../assets/skillsIcons/icons8-css.svg"
import JSIcon from "../assets/skillsIcons/icons8-js.svg"
import NodeIcon from "../assets/skillsIcons/icons8-nodejs.svg"
import MongoDBIcon from "../assets/skillsIcons/icons8-mongo-db-48.png"
import PostgresqlIcon from "../assets/skillsIcons/icons8-postgresql.svg"
import PythonIcon from "../assets/skillsIcons/icons8-python.svg"
import ReactIcon from "../assets/skillsIcons/icons8-react-a-javascript-library-for-building-user-interfaces-64.png"
import VSIcon from "../assets/skillsIcons/icons8-visual-studio.svg"
import GitHubIcon from "../assets/skillsIcons/icons8-github.svg"
import { useEffect } from "react"

const OverLay = (props) =>{

    const handleClose = () => {
        props.setSkills(false)
    }

    const handleBackdropClick = (e) =>{
        //e.target referts to element thats clicked, e.currentTarget refers to element event listener is attached to
        if(e.target === e.currentTarget){
            handleClose();
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Escape'){
            handleClose()
        }
    };

    useEffect(()=>{
        document.addEventListener('keydown', handleKeyDown);

        return () =>{
            document.removeEventListener('keydown', handleKeyDown)
        }
    })

    return(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <img src={HTMLIcon} alt="HTML icon" data-tooltip-id="HTML" data-tooltip-content="HTML" data-tooltip-place="top" style={{ width: '100px', height: '100px' }} />
                <img src={CSSIcon} alt="CSS icon" data-tooltip-id="CSS" data-tooltip-content="CSS" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={JSIcon} alt="JS icon" data-tooltip-id="JS" data-tooltip-content="JavaScript" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={PythonIcon} alt="Python icon" data-tooltip-id="python" data-tooltip-content="Python" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={NodeIcon} alt="Node.js icon" data-tooltip-id="node" data-tooltip-content="Node.js" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={MongoDBIcon} alt="MongoDB icon" data-tooltip-id="mongodb" data-tooltip-content="MongoDB" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={PostgresqlIcon} alt="Postgres icon" data-tooltip-id="postgresql" data-tooltip-content="PostgreSQL" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={ReactIcon} alt="React icon" data-tooltip-id="react" data-tooltip-content="React" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={VSIcon} alt="VS icon" data-tooltip-id="vs" data-tooltip-content="VS Code" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <img src={GitHubIcon} alt="Git Hub icon" data-tooltip-id="github" data-tooltip-content="GitHub" data-tooltip-place="top" style={{width: '100px', height: '100px'}}/>
                <Tooltip id="HTML" />
                <Tooltip id="CSS" />
                <Tooltip id="JS" />
                <Tooltip id="python" />
                <Tooltip id="node" />
                <Tooltip id="mongodb" />
                <Tooltip id="postgresql" />
                <Tooltip id="react" />
                <Tooltip id="vs" />
                <Tooltip id="github" />
               
            </div>
        </div>
    )
};

const SkillsModal = (props) =>{

    return(
        <>
        {ReactDom.createPortal(
            <OverLay
            setSkills={props.setSkills}>

            </OverLay>,
            document.querySelector("#modal-root")
        )}
        </>
    )
}

export default SkillsModal;