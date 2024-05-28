
import { useForm, ValidationError } from '@formspree/react';
import styles from './components_css/ContactForm.module.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvebjp");
  if (state.succeeded) {
      return <p>Thanks for for Reaching Out! Will get back to you Shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
    <label htmlFor="email" className={styles.label}>
        Email Address
    </label>
    <input
        id="email"
        type="email"
        name="email"
        className={styles.input}
    />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className={styles.error}
    />
    <label htmlFor="name" className={styles.label}>Name</label>
      <input
        id="name"
        type="text"
        name="name"
        className={styles.input}
    />
    <label htmlFor="message" className={styles.label}>
        Message
    </label>
  
    <textarea
        id="message"
        name="message"
        className={styles.textarea}
    />
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className={styles.error}
    />
    <button type="submit" disabled={state.submitting} className={styles.submitBtn}>
        Submit
    </button>
</form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;