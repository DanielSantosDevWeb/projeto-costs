import React from "react";
import styles from "./NovoProjeto.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NovoProjeto({ categorias }) {
  const navigate = useNavigate(); //usado para redirecionar para outra rota

  function postProjeto(projeto) {
    // funcao que add o projeto a api

    // localStorage.clear();

    projeto.cost = 0;
    projeto.services = [];
    projeto.id = Math.random();
    projeto.nome =
      projeto.nome === "" || !projeto.nome ? "sem nome" : projeto.nome;

    let ProArr = JSON.parse(localStorage.getItem("projetos")) || [];

    ProArr.push(projeto);

    localStorage.setItem("projetos", JSON.stringify(ProArr));

    //redirect

    navigate("/projetos", {
      state: { menssagem: "Projeto Criado", estado: "sucesso" },
    }); // mandando algumas infos pelo 'useLocation' na chave state
  }

  return (
    <div className={styles.novoProjeto}>
      <h1>Criar Projeto</h1>
      <p>Crie e presonalize seu projeto para adicionar ao serviço </p>
      <ProjectForm
        tratarSubmit={postProjeto}
        categorias={categorias}
        nome="Criar Projeto"
      />
    </div>
  );
}

export default NovoProjeto;
