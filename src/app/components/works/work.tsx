import React from "react";
import styles from "./work.module.scss";

// If you're importing images, use this approach:
import work1 from "../../assets/Work 1.jpg";
import work2 from "../../assets/Work 2.jpg";
import work3 from "../../assets/Work 3.jpg";
import work4 from "../../assets/Work 4.jpg";

const workImages = [work1, work2, work3, work4];

const Works: React.FC = () => {
  return (
    <section id="works" className={styles.worksSection}>
      <h2 className={styles.sectionTitle}>Our Works</h2>
      <div className={styles.gallery}>
        {workImages.map((image, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={image.src} alt={`Work ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
