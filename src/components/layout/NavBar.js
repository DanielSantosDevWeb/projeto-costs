import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../img/costs_logo.png";

function NavBar() {
  return (
    <ul className={styles.lista}>
      <ul>
        <Link to="/projeto-costs">
          <img src={logo} alt="Logo projeto" />
        </Link>
      </ul>
      <div className={styles.navBar}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link to="/projeto-costs">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
      </div>
    </ul>
  );
}

export default NavBar;
