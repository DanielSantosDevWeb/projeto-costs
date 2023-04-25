import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/savings.svg";
import styles from "./Home.module.css";

function Home({ to, text }) {
  return (
    <div className={styles.center}>
      <section className={styles.home}>
        <h1>
          Bem Vindo ao <span>Costs</span>
        </h1>
        <p>Começe a gerenciar os seus projetos agora mesmo</p>
        <Link to="/NovoProjeto"> CriarProjeto </Link>
        <img src={img} alt="" />
      </section>
    </div>
  );
}

export default Home;
