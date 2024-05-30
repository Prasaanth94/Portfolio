import styles from "./components_css/Contact.module.css";
import ContactForm from "./ContactForm"
import Astronot from "../../public/Astronot.gif"

const Contact = () => {
    return (
        <div className={styles.contact} id='contact'>
            <div className={styles.contact_content}>
               
                <div className={styles.contact_intro}>
                    <img src={Astronot} alt="atronot gif" className={styles.Astronot}></img>
                    <h1>Say Hi!</h1>
                    <br></br>
                    <p>I am currently looking for new opportunities and am always open to chat. Even if it's a question or just to say hi I will get back to you.</p>
                </div>
                
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;