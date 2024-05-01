import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from './contact-form.module.css';

export const ContactForm = () => {
	const [sent, setSent] = useState('false');
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('contact_service', 'contact_form', form.current, 'ricvyJgj76QPQnqUM')
			.then((result) => {
				console.log(result.text);
				setSent(true);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset()
	};


	return (
		<form ref={form} onSubmit={sendEmail} className={styles.container}>
			<div className={styles.formGroup}>
				<label className={styles.label} htmlFor='name'>Name</label>
				<input className={styles.field} type="text" name="user_name" placeholder="Enter your name" required />
			</div>
			<div className={styles.formGroup}>
				<label className={styles.label} htmlFor='email'>Email</label>
				<input className={styles.field} type="email" name="user_email" placeholder="Enter your email" required />
			</div>
			<div className={styles.formGroup}>
				<label className={styles.label} htmlFor='message'>Message</label>
				<textarea className={styles.field} name="message" placeholder="Enter your message" required />
			</div>
			{sent === true ?
				<button className={styles.button} disabled><p className={styles.buttonText}>Message Sent!</p></button> :
				<button className={styles.button} type="submit" value="Send"><p className={styles.buttonText}>Submit</p></button>
			}
		</form>
	)
}