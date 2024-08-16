// src/Contact.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.scss";
import Navigation from "../Navigation/Navigation";
import background from "../../../assets/background.jpg";
import Footer from "../Footer/Footer";
import LineSeparator from "../../atoms/Line/LineSeparator";

const Contact = () => {
  return (
    <>
      <Navigation />

      <LineSeparator />
      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <div className={styles.photoSection}>
            <img
              src={background}
              alt="Contact"
              className={styles.contactPhoto}
            />
          </div>
          <div className={styles.infoSection}>
            <h1 className={styles.contactTitle}>Contact Us</h1>
            <div className={styles.contactLinks}>
              <a
                href="https://wa.me/1234567890?text=Hello, I would like to chat with you!"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.whatsapp}`}
              >
                WhatsApp
              </a>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className={styles.formControl} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className={styles.formControl} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className={styles.formControl}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
