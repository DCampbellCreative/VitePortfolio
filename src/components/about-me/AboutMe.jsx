import { Code, Brush, Database } from 'tabler-icons-react';
import Portrait from '../../assets/self-portrait-min.png'

// STYLING
import styles from './about-me.module.css';

// IMAGES
import devImage1 from '../../assets/react.png';
import devImage2 from '../../assets/javascript.png';
import devImage3 from '../../assets/html5.png';
import devImage4 from '../../assets/css3.png';
import desImage1 from '../../assets/illustrator.png'
import desImage2 from '../../assets/figma.png';
import desImage3 from '../../assets/penpot.svg'
import beImage1 from '../../assets/java.svg';
import beImage2 from '../../assets/spring.svg';
import beImage3 from '../../assets/postman.svg';
import TechIcon from '../tech-icon/TechIcon';
import LinkButton from '../link-button/LinkButton';


export const AboutMe = ({ openResume }) => {
	const devImages = [devImage1, devImage2, devImage3, devImage4]
	const desImages = [desImage1, desImage2, desImage3]
	const beImages = [beImage1, beImage2, beImage3]

	return (
		<div className={styles.container} id="home">
			<div className={styles.card1}>
				<img className={styles.portrait} src={Portrait} alt='Doug Campbell' />
				<div className={styles.column}>
					<h1 className={styles.heading1}>Hi, I&apos;m Doug</h1>
					<p className={styles.card1Copy}>I&apos;m a developer with a passion for building and designing applications. I love to learn new technologies. I have a bachelor&apos;s degree in Visual Communications from the University of South Carolina. I have 3 years of experience developing software including contracts, internship roles, and 2 full stack development certifications. </p>
					<p className={styles.card1Copy}>When I&apos;m not building applications I love listening to and discovering new music, taking care of plants, watching films, working out and hiking. I’m always on the lookout for the newest song or story to inspire me. </p>
					<div className={styles.buttonRow}>
						<LinkButton text={'Resume'} onClick={openResume} />
						<LinkButton text={'Github'} href={"https://github.com/DCampbellCreative/"} />
					</div>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.card}>
					<Code
						className={styles.margin}
						size={48}
						strokeWidth={2}
						color={'#44A1A0'}
					/>
					<h2 className={styles.heading}>Frontend<br />Development</h2>
					<p className={styles.copy}>3 years experience including internship and contract positions. Focus on React and JavaScript. Well versed in CSS frameworks and component libraries including TailwindCSS and Mantine UI. Built fully responsive pages using no code tools like Webflow, Wordpress, and Wix Editor X.</p>
					<div className={styles.imageContainer}>
						{devImages.map((img, idx) => (<TechIcon img={img} key={idx} />))}
					</div>
				</div>
				<div className={styles.card}>
					<Database
						className={styles.margin}
						size={48}
						color="#44A1A0"
						strokeWidth={2}
					/>
					<h2 className={styles.heading}>Backend<br />Development</h2>
					<p className={styles.copy}>Built and tested multiple APIs using Java, Spring Boot, Postman, and Postgres. Connected frontend apps to APIs and created backend in NodeJS and MongoDB.</p>
					<div className={styles.imageContainer}>
						{beImages.map((img, idx) => (<TechIcon img={img} key={idx} />))}
					</div>
				</div>
				<div className={styles.card}>
					<Brush
						className={styles.margin}
						size={48}
						color="#44A1A0"
						strokeWidth={2}
					/>
					<h2 className={styles.heading}>Graphic<br />&&nbsp;UI Design</h2>
					<p className={styles.copy}>Bachelor&apos;s degree in Visual Communications, with minor in Graphic Design, from the University of South Carolina. Over 15 years experience designing ads, print materials, and online content using Adobe Creative Suite and other tools. Well versed in creating and converting UI mock ups using Figma and Penpot</p>
					<div className={styles.imageContainer}>
						{desImages.map((img, idx) => (<TechIcon img={img} key={idx} />))}
					</div>
				</div>

			</div>
		</div>
	)
}