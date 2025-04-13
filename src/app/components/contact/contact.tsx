import React from "react";
import styles from "./contact.module.scss";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left: Contact Details */}
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>Glow Beauty Studio</p>
          <p>123 Beauty Lane, Glamour City</p>
          <p>Email: hello@glowbeauty.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Open: Mon - Sat, 10am - 7pm</p>
        </div>

        {/* Right: Contact Form */}
        <div className={styles.contactForm}>
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows={5} placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
