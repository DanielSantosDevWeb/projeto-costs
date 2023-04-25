import React from "react";
import styles from "./empresa.module.css";

function Empresa() {
  return (
    <div className={styles.container}>
      <h1>Sobre</h1>
      <div>
        <h2>
          Sobre o <span>Costs</span>
        </h2>
        <p>
          {" "}
          O costs eh um site de criaçao de projetos pessoais ou empresariais,
          com varios meios de costumizar os projetos e como editar caso alguma
          informaçao do projeto esteja errada.{" "}
        </p>
      </div>
      <div>
        <h2>
          Sobre o <span>Projeto</span>
        </h2>
        <p>
          <p>
            projeto foi criado em um curso online do canal "Hora de Codar",
            peguei varias referencia e aprendi formas de costumizaçao.
          </p>
          <p>
            Usei varios hooks do React , e Tambem usei o JsonServer para criar
            uma api em um localhost interno para usar o 'GET' ,'POST' , 'DELETE'
            e o 'PATCH'. OBS: Depois mudei e coloquei os projetos alocados no
            LocalStorage para nao ter erro na hora de postar no GitHub
          </p>
        </p>
      </div>
    </div>
  );
}

export default Empresa;
