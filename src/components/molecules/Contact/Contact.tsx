import { useState } from "react";
import styles from "./Contact.module.scss";
import Navigation from "../Navigation/Navigation";
import background from "../../../assets/background.jpg";
import Footer from "../Footer/Footer";
import LineSeparator from "../../atoms/Line/LineSeparator";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const payload = {
      from: email,
      subject: t("contact.emailSubject", { name }),
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
        setStatus(t("contact.status.success"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(t("contact.status.error"));
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus(t("contact.status.unexpected"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className={styles.contactPage}>
        <LineSeparator />
        <div className={styles.contactContainer}>
          <div className={styles.photoSection}>
            <img
              src={background}
              alt={t("contact.imageAlt")}
              className={styles.contactPhoto}
            />
          </div>
          <div className={styles.infoSection}>
            <span className={styles.kicker}>{t("contact.kicker")}</span>
            <h1 className={styles.contactTitle}>{t("contact.title")}</h1>
            <p className={styles.contactDescription}>{t("contact.description")}</p>
            <div className={styles.contactLinks}>
              <a
                href={`https://wa.me/+529841820450?text=${encodeURIComponent(
                  t("contact.whatsAppMessage")
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.whatsapp}`}
              >
                {t("contact.whatsAppLabel")}
              </a>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t("contact.form.name")}</label>
                <input
                  type="text"
                  id="name"
                  className={styles.formControl}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t("contact.form.email")}</label>
                <input
                  type="email"
                  id="email"
                  className={styles.formControl}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">{t("contact.form.message")}</label>
                <textarea
                  id="message"
                  className={styles.formControl}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
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
