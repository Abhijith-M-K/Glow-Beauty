import React from "react";
import styles from "./services.module.scss";

const servicesData = [
  {
    title: "Facial Treatments",
    description: "Deep cleansing, hydration, and rejuvenating facials for all skin types.",
  },
  {
    title: "Hair Styling",
    description: "Haircuts, coloring, straightening, and professional styling services.",
  },
  {
    title: "Makeup Services",
    description: "Bridal, party, and casual makeup tailored to your features and style.",
  },
  {
    title: "Manicure & Pedicure",
    description: "Nail grooming, painting, and spa treatments for hands and feet.",
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
