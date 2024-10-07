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
                Nieve's house
              </Link>
            </li>
            <li>
              <Link to="/casas/marias-house" onClick={toggleMenu}>
                Maria's loft
              </Link>
            </li>
            <li>
              <Link to="/casas/casa-azul" onClick={toggleMenu}>
                Casa Azul
              </Link>
            </li>
            <li>
              <Link to="/casas/casa-azul-corazon" onClick={toggleMenu}>
                Casa Azul Corazon
              </Link>
            </li>
            <li>
              <Link to="/casas/begos-house" onClick={toggleMenu}>
                Begos House
              </Link>
            </li>
            <li>
              <Link to="/casas/changos-house" onClick={toggleMenu}>
                Changos House
              </Link>
            </li>
            <li>
              <Link to="/casas/mini-house" onClick={toggleMenu}>
                Mini House
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/reviews" onClick={toggleMenu}>
            Reviews
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
