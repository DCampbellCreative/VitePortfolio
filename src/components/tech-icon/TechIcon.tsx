import styles from "./tech-icon.module.css";

type TechIconProps = {
  imgSrc: string;
};

const TechIcon = ({ imgSrc }: TechIconProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgSrc} alt='icon' />
    </div>
  );
};

export default TechIcon;
