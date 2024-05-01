import { Link } from "react-router-dom";
//DATA
import { PROJECTS } from '../../data/projects';
// STYLING
import styles from './my-work-mobile.module.css';
import LinkButton from "../link-button/LinkButton";

export const MyWorkMobile = () => {
	return (
		<section className={styles.container} id='projects'>
			<main className={styles.list}>
				{PROJECTS.map((project, idx) => (<article key={idx} className={styles.card}>
					<div className={styles.cardContainer}>

						<div className={styles.heading}>{project.title}</div>
						<img className={styles.image} src={project.imgUrl} alt={project.title} />
						<p className={styles.body}>
							{project.description}
						</p>
						<div className={styles.tools}>
							{project.tools.map((tool, idx) => (<span key={idx}>{(idx ? ', ' : '') + '#' + tool}</span>))}
						</div>

						<div className={styles.buttonContainer}>
							{Object.entries(project.links).map(([key, value], i) => (<LinkButton key={i + key} href={value} text={key} />))}
							{project.processId ? <Link className={styles.cardButton} to={`process/${project.processId}`}><p className={styles.text}>Process</p></Link> : null}
						</div>


					</div>
				</article>))}



			</main>
		</section>
	)
};

