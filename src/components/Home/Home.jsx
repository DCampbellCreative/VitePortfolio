import { NavBar } from '../NavBar/NavBar';
import { AboutMeNew } from '../AboutMeNew/AboutMeNew';
import { MyWork } from '../MyWork/MyWork';
import { Contact } from '../Contact/Contact';
import { MyWorkMobile } from '../MyWorkMobile/MyWorkMobile';

import Resume from "../../assets/Campbell-Doug-Resume.pdf"

export const Home = ({ width }) => {

	const openResume = () => {
		window.open(Resume, "_blank")
	}

	return (
		<div>
			<NavBar />
			<AboutMeNew openResume={openResume} />
			{width < 900 ? <MyWorkMobile /> : <MyWork />}
			<Contact openResume={openResume} />
		</div>
	);
}

