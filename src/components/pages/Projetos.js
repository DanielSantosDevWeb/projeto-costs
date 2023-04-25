import React from "react";
import Menssagem from "./Menssagem";
import { useLocation } from "react-router-dom";
import Button from "../inputsForm/Button";
import ProjetoCard from "../project/ProjetoCard";
import styles from "./Projetos.module.css";
import { useNavigate } from "react-router-dom";

function Projetos() {
  const location = useLocation(); //usado para pegar algumas infos que foi passada na chamado da rota

  const nav = useNavigate();

  const redirect = () => nav("/novoProjeto");
  return (
    <div className={styles.body}>
      <div className={styles.sideBar}>
        <h2>Projetos</h2>
        <Button type="submit" value="criar" click={redirect} />
      </div>
      <Menssagem status={location.state} />
      <ProjetoCard />
    </div>
  );
}

export default Projetos;
