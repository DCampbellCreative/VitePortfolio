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
			<div className={styles.topSection}>
				<img className={styles.portrait} src={Portrait} alt='Doug Campbell' />
				<div className={styles.column}>
					<h1 className={styles.topHeading}>Hi, I&apos;m Doug</h1>
					<p className={styles.topCopy}>I&apos;m a developer with a passion for building and designing applications. I love to learn new technologies.
						When I&apos;m not building applications I love listening to and discovering new music, taking care of plants, watching films, working out and hiking. I’m always on the lookout for the newest song or story to inspire me. </p>
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
					<p className={styles.copy}>3 years of experience developing software including contracts and internship roles. 2 full stack development certifications, Create Opportunity Columbia and Career Foundry. Focus on React and JavaScript. Well versed in CSS frameworks and React component libraries including Tailwind CSS, Material UI, and Mantine UI. Designed and built fully responsive pages using low code tools like Webflow and Wordpress.</p>
					<div className={styles.imageContainer}>
						{devImages.map((img, idx) => (<TechIcon img={img} key={idx} />))}
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
					<p className={styles.copy}>Graduated from the University of South Carolina with a bachelor&apos;s degree in Visual Communications and minor in Graphic Design. 15 years experience designing graphics, ads, print materials, and online content using Adobe Creative Suite and other tools. Created and converted UI mock ups for frontend applications using Figma and Penpot</p>
					<div className={styles.imageContainer}>
						{desImages.map((img, idx) => (<TechIcon img={img} key={idx} />))}
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
					<p className={styles.copy}>Built and tested multiple REST APIs with full CRUD functionality using Java, Spring Boot, Postman, Postgres, Node JS, Express, and Mongo DB.</p>
					<div className={styles.imageContainer}>
						{beImages.map((img, idx) => (<TechIcon img={img} key={idx} />))}
					</div>
				</div>


			</div>
		</div>
	)
}