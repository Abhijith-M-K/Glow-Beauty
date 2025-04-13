import React from "react";
import aboutImage from "../../assets/about.jpg"; 
import styles from "./about.module.scss"; 


const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs} id="about-us">
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          {/* <img src={aboutImage} alt="About Glow Beauty" /> */}
          <img src={aboutImage.src} alt="About Glow Beauty" />

        </div>
        <div className={styles.textSection}>
          <h2>About Glow Beauty</h2>
          <p>
            At Glow Beauty, we believe beauty is more than skin deep. Our expert team offers luxurious treatments,
            personalized care, and the latest in skincare technology to bring out your natural radiance. 
            Whether you're looking for a relaxing facial, rejuvenating therapy, or a complete makeover, 
            we are here to help you feel confident and beautiful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
