import styles from './components_css/AboutMe.module.css'
import profile_img from '../assets/profile_img.jpg'
import {bounce} from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounce}`;

const Bounce = styled.div`
  animation: ${bounceAnimation} 2s 2;
  
`;

const AboutMe = () => {

    return (
        <div className={styles.aboutMe} id="about-me">
         <div className={styles.profile_img}> 
         <img src={profile_img} className={styles.image} ></img>
         </div>
         <div className={styles.aboutMe_text}>
            <h2 className={styles.intro}>Hi, i am</h2>
            <Bounce><h1 className={styles.name}>Prasaanth</h1></Bounce>
            <h3 className={styles.developer}>An Aspiring Developer...</h3>
            <p className={styles.description}>Driven and freshly graduated from a rigorous coding bootcamp, I am a software developer eager to embark on my professional journey in this industry. 
                With a good foundation in coding and passion for continuous learning, I am actively seeking opportunities to apply my <span className={styles.skills}>SKILLS</span>. 
                Equipped with strong communication skills and collaborative spirit, I thrive in a team setting where I can contribute and learn from my peers. 
                Being quick to adapt helps me grasp new concepts ensuring I can perform up to standard.
                 My dedication to learning, coupled with a strong work ethic fuels my commitment to deliver expectations. 
                 I am looking forward to leverage my skills and passion for coding to make meaningful contributions to innovative projects that can impact the tech industry.

            </p>
         </div>
        </div>
    );
};

export default AboutMe;