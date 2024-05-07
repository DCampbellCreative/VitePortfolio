import { Link } from "react-router-dom";
// DATA
import { PROJECTS } from '../../Data/PROJECTS';
// STYLING
import styles from './my-work.module.css';
import LinkButton from "../link-button/LinkButton";

export const MyWork = () => {
	return (
		<section className={styles.container} id='projects'>
			<main className={styles.list}>
				{PROJECTS.map((project, idx) => (<article key={idx} className={styles.card}>
					<div className={styles.cardContainer}>
						<div className={styles.column1}>
							<div className={styles.column1Container}>
								<h2 className={styles.heading}>{project.title}</h2>
								<p className={styles.body}>
									{project.description}
								</p>
								<div className={styles.tools}>
									{project.tools.map((tool, i) => (<span key={i + tool}>{(i ? ' / ' : '') + tool}</span>))}
								</div>
								<div className={styles.buttonContainer}>
									{Object.entries(project.links).map(([key, value], i) => (<LinkButton key={i + key} href={value} text={key} />))}
									{project.processId ? <Link className={styles.cardButton} to={`process/${project.processId}`}><p className={styles.linkText}>Process</p></Link> : null}
								</div>
							</div>
						</div>
						<div className={styles.column2}>
							<img className={styles.cardImage} src={project.imgUrl} alt={project.title} />
						</div>
					</div>
				</article>))}
			</main>
		</section>
	)
};

