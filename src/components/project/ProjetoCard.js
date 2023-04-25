import React from "react";
import { useState, useEffect } from "react";
import styles from "./ProjetoCard.module.css";
import Loading from "../layout/Loading";
import Menssagem from "../pages/Menssagem";
import { useNavigate } from "react-router-dom";

function ProjetoCard() {
  const [Projetos, setProjetos] = useState();
  const [loadShow, setLoadShow] = useState(true);
  const [showMsg, setshowMsg] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setProjetos(JSON.parse(localStorage.getItem("projetos")));
      setLoadShow(false);
    }, 2000);
  }, []);

  function deleteItem(id) {
    let ProjetoAtualizado = Projetos.filter((projetos) => projetos.id !== id);

    setProjetos(ProjetoAtualizado);

    setshowMsg(true);

    localStorage.setItem("projetos", JSON.stringify(ProjetoAtualizado));

    console.log(ProjetoAtualizado);

    // setInterval(() => {
    //   setshowMsg(false);
    // }, 4000);
  }

  return (
    <div className={styles.cards}>
      {showMsg && (
        <Menssagem
          status={{ menssagem: "Item Deletado", estado: "deletado" }}
        />
      )}
      {Projetos &&
        Projetos.map((i) => (
          <div key={i.id} className={styles.card}>
            <h4>{i.nome}</h4>

            <p>
              <span>Valor:</span> {i.valor} Reais
            </p>
            <p>
              <span>Categoria:</span> {i.categoria.name}
            </p>
            <div className={styles.modificar}>
              <div onClick={() => nav(`/projeto/${i.id}`)}>Editar</div>
              <div onClick={() => deleteItem(i.id)}>Remover</div>
            </div>
          </div>
        ))}
      {loadShow && <Loading />}
    </div>
  );
}

export default ProjetoCard;
