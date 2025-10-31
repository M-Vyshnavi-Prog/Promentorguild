import styles from "./interiordesign.module.css";

export default function InteriorDesign() {
  return (
    <div className={styles["interior-page"]}>
      <div className={styles.overlay}>
        <h1>Architecture and Interior Design</h1>
        <p>
          We offer specialized training in industry-standard design tools and techniques for
          students, freelance designers, and firms.
        </p>
      </div>
    </div>
  );
}
