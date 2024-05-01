import { NavBar } from '../nav-bar/NavBar';
import { AboutMe } from '../about-me/AboutMe';
import { MyWork } from '../my-work/MyWork';
import { Contact } from '../contact/Contact';
import { MyWorkMobile } from '../my-work-mobile/MyWorkMobile';

import Resume from '../../assets/campbell-doug-resume.pdf'

export const Home = ({ width }) => {

	const openResume = () => {
		window.open(Resume, "_blank")
	}

	return (
		<>
			<NavBar />
			<AboutMe openResume={openResume} />
			{width < 900 ? <MyWorkMobile /> : <MyWork />}
			<Contact openResume={openResume} />
		</>
	);
}

