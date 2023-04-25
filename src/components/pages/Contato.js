import React from "react";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <div className={styles.container}>
      <h1>contato</h1>
      <div>
        <p>
          Meu GitHub{" "}
          <a href="http://github.com/danielsantosdevweb" target="_blank">
            click aqui para entrar
          </a>
        </p>
        <p>
          Meu LinkedIn{" "}
          <a
            href="https://www.linkedin.com/in/daniel-santos-4bba1b246/"
            target="_blank"
          >
            click aqui para entrar
          </a>
        </p>
        <p>
          Meu Repositorio{" "}
          <a href="#" target="_blank">
            click aqui para entrar
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contato;
