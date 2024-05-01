import './nav-bar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/hexlogo-01.png'

export const NavBar = () => {
	return (
		<nav className="nav-bar-container">
			<div className="nav-title-container">
				<img className="logo-image" src={Logo} alt="Doug Campbell Logo"></img>
			</div>
			<div className='nav-link-container'>
				<div className='nav-link-container'>
					<Link className='nav-bar-link' offset={-100} to="home" spy={true} smooth={true}>About</Link>
					<Link className='nav-bar-link' offset={-100} to="projects" spy={true} smooth={true}>Work</Link>
					<Link className='nav-bar-link' to="contact" spy={true} smooth={true}>Contact</Link>
				</div>
			</div>

		</nav>
	)
}