import styles from "./Menu.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCookie, getCookie } from "../../utils/cookies";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const clearCookies = () => {
    setIsOpen(false);
    deleteCookie("AccessToken");
    deleteCookie("RefreshToken");
  }

  return (
    <div className={styles.Menu}>
      <div
        className={styles.Menu__button}
        onClick={toggleMenu}
      >
        <span />
      </div>
      {isOpen &&
        <div className={styles.Menu__panel}>

          <Link
            onClick={toggleMenu}
            className={styles.Menu__link}
            to="/">Главная
          </Link>

          {getCookie("AccessToken") &&
            <Link
              onClick={toggleMenu}
              className={styles.Menu__link}
              to="/profile">
              Профиль
            </Link>}

          {getCookie("AccessToken") &&
          <Link
            onClick={toggleMenu}
            className={styles.Menu__link}
            to="/favorites">
            Избранное
          </Link>}

          {getCookie("AccessToken") &&
            <Link
              onClick={clearCookies}
              className={styles.Menu__link}
              to="/login">
              Выход
            </Link>}

          {!getCookie("AccessToken") &&
            <Link
              onClick={toggleMenu}
              className={styles.Menu__link}
              to="/login">
              Вход
            </Link>}

          {!getCookie("AccessToken") &&
            <Link
              onClick={toggleMenu}
              className={styles.Menu__link}
              to="/register">
              Регистрация
            </Link>}

        </div>
      }
    </div>
  )
};

export default Menu;