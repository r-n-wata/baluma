import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Logo from "../../../assets/logov1.svg";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>
      <div
        className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${isOpen ? styles.open : ""} ${styles.nav_cont}`}>
        <li
          className={isDropdownOpen ? "open casaDropdown" : "casaDropdown"}
          onClick={toggleDropdown}
        >
          Casas
          <ul className={styles.dropdown}>
            <li>
              <Link to="/casas/lucias-house" onClick={toggleMenu}>
                Lucia's House
              </Link>
            </li>
            <li>
              <Link to="/casas/nieves-house" onClick={toggleMenu}>
                Submenu 2
              </Link>
            </li>
            <li>
              <Link to="/casas/marias-house" onClick={toggleMenu}>
                Submenu 3
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/casa4" onClick={toggleMenu}>
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
