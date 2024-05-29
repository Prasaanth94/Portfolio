// src/components/Resume.js
import ReactDom from 'react-dom'
import styles from '../components/components_css/Resume.module.css';
import PropTypes from 'prop-types';

const OverLay = (props) =>{

    const handleClose = () =>{
        props.setShowResume(false);
    }

    return (
        <>
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                
                <a href="/public/Prasaanth(Resume).pdf" download="/public/Prasaanth(Resume).pdf" className={styles.downloadResumeButton}>Download Resume</a>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
        </>
    )
};

OverLay.propTypes = {
    setShowResume: PropTypes.func.isRequired
};

const Resume = (props) =>{

    return(
        <>
        {ReactDom.createPortal(
            <OverLay setShowResume={props.setShowResume}></OverLay>,
            document.querySelector('#modal-root')
        )}
        </>
        
    )
};

Resume.propTypes={
    setShowResume: PropTypes.func.isRequired
};

export default Resume;