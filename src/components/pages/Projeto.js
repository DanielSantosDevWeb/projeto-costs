import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectForm from "../project/ProjectForm";
import Loading from "../layout/Loading";
import styles from "./Projeto.module.css";

function Projeto({ categorias }) {
  const { id } = useParams();
  const [projeto, setprojeto] = useState(false);
  const [projetoVisivel, setprojetoVisivel] = useState(true);

  useEffect(() => {
    JSON.parse(localStorage.getItem("projetos")).map((i) => {
      if (i.id == id) {
        setprojeto(i);
      }
    });
  }, []);

  const editarProjeto = () => {
    setprojetoVisivel(!projetoVisivel);
  };

  const editar = (obj) => {
    let projetos = JSON.parse(localStorage.getItem("projetos"));

    const projetoRem = projetos.filter((i) => i.id !== projeto.id);

    projetoRem.push(obj);

    localStorage.setItem("projetos", JSON.stringify(projetoRem));

    setprojeto(obj);

    editarProjeto();
  };

  return (
    <>
      {projeto ? (
        <div className={styles.projeto}>
          <div className={styles.top}>
            <h1> {projeto.nome}</h1>
            <button onClick={editarProjeto}>
              {projetoVisivel ? <>editar</> : <>fechar</>}
            </button>
          </div>
          {projetoVisivel ? (
            <div className={styles.body}>
              <p>
                <span>Categoria: </span> {projeto.categoria.name}
              </p>
              <p>
                <span>Total do orçamento: </span>{" "}
                {projeto.valor === "Sem valor" ? (
                  <>{projeto.valor}</>
                ) : (
                  <>{projeto.valor} Reais</>
                )}
              </p>
              <p>
                <span>Total ultilizado: </span>
              </p>
              <p>
                <span>Data prevista: </span>
                {typeof projeto.data === "object"
                  ? `${projeto.data[2]}/ ${projeto.data[1]}/ ${projeto.data[0]}`
                  : "Sem Data Prevista"}
              </p>
            </div>
          ) : (
            <div>
              <ProjectForm
                categorias={categorias}
                nome="Editar Projeto"
                tratarSubmit={editar}
                dataProjetos={projeto}
              />
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Projeto;
