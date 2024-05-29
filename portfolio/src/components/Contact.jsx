import styles from "./components_css/Contact.module.css";
import ContactForm from "./ContactForm"

const Contact = () => {
    return (
        <div className={styles.contact} id='contact'>
            
         <ContactForm></ContactForm>   
            
        </div>
    );
};

export default Contact;