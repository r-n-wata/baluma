import { useState } from "react";
import styles from "./Contact.module.scss";
import Navigation from "../Navigation/Navigation";
import background from "../../../assets/background.jpg";
import Footer from "../Footer/Footer";
import LineSeparator from "../../atoms/Line/LineSeparator";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To track form submission status

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      from: email,
      subject: `Message from ${name}`,
      text: message,
    };

    try {
      const response = await fetch(
        "https://complete-nedi-freelancing123-168024ba.koyeb.app/send-test-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message.");
    }
  };

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
                href="https://wa.me/+529841820450?text=Hello, I would like to chat with you about the availability of your houses!"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.whatsapp}`}
              >
                WhatsApp
              </a>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className={styles.formControl}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className={styles.formControl}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className={styles.formControl}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
            {status && <p className={styles.statusMessage}>{status}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
