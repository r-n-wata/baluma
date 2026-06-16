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
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

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
        setStatus("Tu mensaje se envió correctamente.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("No pudimos enviar tu mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Ocurrió un error al enviar el mensaje.");
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
              alt="Vista de Bacalar"
              className={styles.contactPhoto}
            />
          </div>
          <div className={styles.infoSection}>
            <span className={styles.kicker}>Hablemos</span>
            <h1 className={styles.contactTitle}>Reserva con más claridad y menos fricción</h1>
            <p className={styles.contactDescription}>
              Escríbenos para consultar disponibilidad, resolver dudas o
              encontrar la casa ideal para tu viaje.
            </p>
            <div className={styles.contactLinks}>
              <a
                href="https://wa.me/+529841820450?text=Hola, me gustaría conocer la disponibilidad de sus casas en Bacalar."
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.whatsapp}`}
              >
                WhatsApp directo
              </a>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className={styles.formControl}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo</label>
                <input
                  type="email"
                  id="email"
                  className={styles.formControl}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  className={styles.formControl}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos fechas, número de huéspedes o cualquier detalle útil."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
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
