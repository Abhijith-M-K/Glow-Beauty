import React from "react";
import styles from "./banner.module.scss";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Unleash Your Inner Glow</h1>
          <p>Experience luxury beauty treatments tailored just for you.</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
