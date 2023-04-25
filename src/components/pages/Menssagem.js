import React from "react";
import styles from "./Menssagem.module.css";
import { useState } from "react";
import { useEffect } from "react";

function Menssagem({ status }) {
  const [Visivel, setVisivel] = useState(false);

  const [Msg, setMsg] = useState();
  const [Status, setSatus] = useState();

  // useEffect usado para fazer timers sem da erro no codigo
  useEffect(() => {
    if (status) {
      setMsg(status.menssagem);
      setSatus(status.estado);

      setVisivel(true);
    }

    setInterval(() => {
      setVisivel(false);
    }, 4000);
  }, []);

  return <>{Visivel && <div className={styles[Status]}>{Msg}</div>}</>;
}

export default Menssagem;
