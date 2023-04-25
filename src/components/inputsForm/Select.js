import React from "react";
import styles from "./Select.module.css";

function Select({ name, value, categorias, tratarOnChange }) {
  return (
    <div className={styles.select}>
      <select onChange={tratarOnChange}>
        <option key="0">Selecione um projeto</option>
        {categorias.map((e) => (
          <option value={e.id} key={e.nome}>
            {e.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
