import { ContactForm } from '../contact-form/ContactForm';
import styles from './contact.module.css';

export const Contact = (props) => {
	return (
		<footer id='contact' className={styles.card}>
			<div className={styles.container}>
				<h2 className={styles.heading}>Contact Me</h2>
				<ContactForm />
				<div className={styles.cardContainer}>
					<div className={styles.linkContainer}>
						<p className={styles.connect}>Connect:</p>
						<button className={styles.link} onClick={props.openResume} rel="noopener noreferrer" target="_blank" >Resume</button>
						<span className={styles.connect}>/</span>
						<a className={styles.link} href="https://www.linkedin.com/in/douglass-campbell/" rel="noreferrer" target="_blank">LinkedIn</a>
						<span className={styles.connect}>/</span>
						<a className={styles.link} href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank">Github</a>
					</div>
				</div>
			</div>
		</footer>
	);
}