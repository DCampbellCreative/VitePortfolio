import styles from './link-button.module.css'

const LinkButton = ({ text, href, onClick, }) => {
	return (
		<a className={styles.button} onClick={onClick ? onClick : null} href={href ? href : null} rel="noopener noreferrer" target="_blank">
			<p className={styles.text}>{text}</p>
		</a>
	)
}

export default LinkButton