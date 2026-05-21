import styles from "./link-button.module.css";

type LinkButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
};

const LinkButton = ({ text, href, onClick }: LinkButtonProps) => {
  return (
    <a
      className={styles.button}
      onClick={onClick}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <p className={styles.text}>{text}</p>
    </a>
  );
};

export default LinkButton;
