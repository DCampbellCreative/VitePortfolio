import styles from './nav-bar.module.css';
import { Link } from 'react-scroll';
import Logo from '/assets/hexlogo-01.png'

export const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<img className={styles.logo} src={Logo} alt="Doug Campbell Logo"></img>
				<div className={styles.linkContainer}>
					<Link className={styles.link} offset={-100} to="home" spy={true} smooth={true}>About</Link>
					<Link className={styles.link} offset={-100} to="projects" spy={true} smooth={true}>Work</Link>
					<Link className={styles.link} to="contact" spy={true} smooth={true}>Contact</Link>
				</div>
			</div>
		</nav>
	)
}