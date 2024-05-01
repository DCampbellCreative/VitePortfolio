import styles from './tech-icon.module.css';

const TechIcon = ({ img }) => {
	return (
		<div className={styles.container}><img className={styles.image} src={img} alt="icon" /></div>
	)
}

export default TechIcon