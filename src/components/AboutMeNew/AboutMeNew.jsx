import { Code, Brush } from 'tabler-icons-react';
import Portrait from '../../assets/self-portrait-min.png'

// STYLING
import './AboutMeNew.css';

// IMAGES
import devImage1 from '../../assets/react.png';
import devImage2 from '../../assets/javascript.png';
import devImage3 from '../../assets/html5.png';
import devImage4 from '../../assets/css3.png';
import desImage1 from '../../assets/illustrator.png'
import desImage2 from '../../assets/figma.png'
import Resume from "../../assets/Campbell-Doug-Resume.pdf";

export const AboutMeNew = (openResume) => {
	const devImages = [devImage1, devImage2, devImage3, devImage4]
	const desImages = [desImage1, desImage2]
	return (
		<div className="amn-container" id="home">
			<h1 className='amn-heading-1'>Doug Campbell</h1>

			<div className="amn-row">
				<div className='amn-card-1'>
					<img className='amn-portrait' src={Portrait} alt='Doug Campbell' />
					<p className='amn-body justify'>Frontend developer with passion for creating for creating responsive sites and apps. I enjoy watching films, 90&apos;s sitcoms, listening to music, and playing guitar. I&apos;m always on the lookout for the newest song or story to inspire me.</p>
					<div className='button-row'>
						<a className="anm-button" href={Resume} onClick={openResume} rel="noopener noreferrer" target="_blank">Resume</a>
						<a className='anm-button' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank">GitHub</a>
					</div>

				</div>

				<div className='amn-card'>
					<Code
						className='amn-margin'
						size={48}
						color="#44A1A0"
						stroke={2}
					/>
					<h2 className='amn-heading'>Frontend<br />Development</h2>
					<p className='amn-body'>1 year experience including internship and contract positions. Focus on React and JavaScript. Connected apps to APIs and created backend in NodeJS and MongoDB. Well versed in CSS frameworks and component libraries including TailwindCSS and Mantine UI. Built fully responsive pages using no code tools like Webflow and Wix Editor X.</p>
					<div className="amn-image-container">
						{devImages.map((img, idx) => (<div key={idx} className="amn-image-bg"><img className='amn-image' src={img} alt="icon" /></div>))}
					</div>
				</div>
				<div className='amn-card'>
					<Brush
						className='amn-margin'
						size={48}
						color="#44A1A0"
						stroke={2}
					/>
					<h2 className='amn-heading'>Graphic<br />&&nbsp;UI Design</h2>
					<p className='amn-body'>Bachelor&apos;s degree in Visual Communications, with minor in Graphic Design, from the University of South Carolina. Over 15 years experience designing ads, print materials, and online content using Adobe Creative Suite and other tools.</p>
					<div className="amn-image-container">
						{desImages.map(img => (<div className="amn-image-bg" key={img}><img className='amn-image' src={img} alt="icon" /></div>))}
					</div>
				</div>
			</div>
		</div>
	)
}