import './Contact.css';
import { ContactForm } from '../ContactForm/ContactForm';

export const Contact = (props) => {



	return (
		<footer id='contact'>
			<main className='contact-card'>
				<div className='contact-container'>
					<h1 className='contact-heading'>Contact Me</h1>
					<ContactForm />
					<div className='contact-card-container'>
						<div className='contact-link-container'>
							<p className='connect'>Connect:</p>
							<button className='contact-link' onClick={props.openResume} rel="noopener noreferrer" target="_blank" >Resume</button>
							<span>/</span>
							<a className='contact-link' href="https://www.linkedin.com/in/douglass-campbell/" rel="noreferrer" target="_blank">LinkedIn</a>
							<span>/</span>
							<a className='contact-link' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank">Github</a>
							<span>/</span>
							<a className='contact-link' href="https://dougcampbell.blog/" rel="noreferrer" target="_blank">Blog</a>
						</div>
					</div>
				</div>
			</main>
		</footer>

	);
}