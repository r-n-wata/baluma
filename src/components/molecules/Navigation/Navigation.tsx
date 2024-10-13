import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Logo from "../../../assets/logov1.svg";
import homeIcon from "../../../assets/home.png";
import homeIcon2 from "../../../assets/home2.png";

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
        <li>
          <Link to="/" onClick={toggleMenu}>
            <img src={homeIcon} alt="Home" className={styles.homeIconLarge} />
            <img src={homeIcon2} alt="Home" className={styles.homeIconSmall} />
          </Link>
        </li>
        <li
          className={isDropdownOpen ? "open casaDropdown" : "casaDropdown"}
          onClick={toggleDropdown}
        >
          CASAS
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
              <Link to="/casas/begos-house" onClick={toggleMenu}>
                Bego's House
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
              <Link to="/casas/changos-house" onClick={toggleMenu}>
                Changos House
              </Link>
            </li>
            <li>
              <Link to="/casas/mini-house" onClick={toggleMenu}>
                Estudio Tiliche
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/reviews" onClick={toggleMenu}>
            RESEÑAS
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={toggleMenu}>
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
