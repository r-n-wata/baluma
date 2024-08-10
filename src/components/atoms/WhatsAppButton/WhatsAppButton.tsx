import React from "react";
import styles from "./WhatsAppButton.module.scss";
interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}
import whatsAppIcon from "../../../assets/whatsappButton.png";

const WhatsAppButton = ({ phoneNumber, message }: WhatsAppButtonProps) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={openWhatsApp}
      className={styles.button}
      style={{ width: "40px" }}
    >
      <img src={whatsAppIcon} alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppButton;
