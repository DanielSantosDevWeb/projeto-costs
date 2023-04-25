import React from "react";
import styles from "./Input.module.css";

function Input({ type, text, placeholder, name, value, tratarOnChange }) {
  return (
    <div className={styles.input}>
      <label htmlFor="">{text}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={tratarOnChange}
      />
    </div>
  );
}

export default Input;
