import styles from "./University.module.css";
import house from "../../../../images/school@2x.png";

const University = () => {
  const description = "Description...";
  return (
    <div className={`${styles.card}`}>
      <div className={`box ${styles.cardAvatar}`}>
        <img src={house} alt="Avatar" />
        <span className={styles.schoolType}>university</span>
        <span className={styles.schoolName}>MIT</span>
      </div>
      <div className={`box ${styles.cardDescription}`}>{description}</div>
    </div>
  );
};

export default University;
