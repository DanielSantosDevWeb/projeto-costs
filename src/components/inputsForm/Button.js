import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ type, value, click }) {
  return (
    <div className={styles.button}>
      <input type={type} value={value} onClick={click} />
    </div>
  );
}

export default Button;
