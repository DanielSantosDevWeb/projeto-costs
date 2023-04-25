import React from "react";
import load from "../../img/loading.svg";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <img src={load} className={styles.gif} alt="carregando" />
    </div>
  );
}

export default Loading;
