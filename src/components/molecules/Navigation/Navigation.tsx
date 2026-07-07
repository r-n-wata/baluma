import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Logo from "../../../assets/logov1.svg";
import homeIcon from "../../../assets/home.png";
import homeIcon2 from "../../../assets/home2.png";
import { useTranslation } from "react-i18next";
import LangButton from "../../atoms/LangButton/LangButton";
import { houseRoutes } from "../../../seo/houseRoutes";

function Navigation() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isHousesPage = pathname.startsWith("/casas");
  const isActiveHouse = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={Logo} alt="Baluma Bacalar" className={styles.logo} />
      </Link>
      <button
        type="button"
        className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        aria-expanded={isOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.visible : ""}`}
        onClick={closeMenu}
      />
      <ul className={`${styles.nav_cont} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link
            to="/"
            onClick={closeMenu}
            className={pathname === "/" ? styles.activeLink : ""}
          >
            <img src={homeIcon} alt={t("nav.home")} className={styles.homeIconLarge} />
            <img src={homeIcon2} alt={t("nav.home")} className={styles.homeIconSmall} />
          </Link>
        </li>
        <li
          className={`${isDropdownOpen ? styles.dropdownOpen : ""} ${
            isHousesPage ? styles.activeItem : ""
          }`}
        >
          <button
            type="button"
            className={`${styles.dropdownTrigger} ${
              isHousesPage ? styles.activeTrigger : ""
            }`}
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            {t("nav.houses")}
          </button>
          <ul
            className={`${styles.dropdown} ${isDropdownOpen ? styles.visible : ""}`}
          >
            {houseRoutes.map((house) => (
              <li key={house.path}>
                <Link
                  to={house.path}
                  onClick={closeMenu}
                  className={isActiveHouse(house.path) ? styles.activeLink : ""}
                >
                  {house.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link
            to="/reviews"
            onClick={closeMenu}
            className={pathname === "/reviews" ? styles.activeLink : ""}
          >
            {t("nav.reviews")}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={pathname === "/contact" ? styles.activeLink : ""}
          >
            {t("nav.contact")}
          </Link>
        </li>
        <li className={styles.langItem}>
          <LangButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
