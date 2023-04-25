import styles from "./ProjectForm.module.css";
import Input from "../inputsForm/Input";
import Select from "../inputsForm/Select";
import Button from "../inputsForm/Button";

import { useState, useEffect } from "react";

function ProjectForm({ dataProjetos, categorias, tratarSubmit, nome }) {
  let ano = 2000;

  const [projeto, setProjeto] = useState(
    dataProjetos || {
      nome: "Sem Nome",
      valor: "xxx",
      categoria: {
        id: "0",
        name: "Sem categoria",
      },
      data: "Sem data prevista",
    }
  );

  const submit = (e) => {
    e.preventDefault();

    tratarSubmit(projeto);
  };

  const tratarInputs = (e) => {
    let valorInput = { ...projeto, [e.target.name]: e.target.value };

    setProjeto(valorInput);
  };

  const tratarSelect = (e) => {
    let categoria = {
      ...projeto,
      categoria: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    };

    setProjeto(categoria);
  };

  const data = (e) => {
    if (e.target.value === "") {
      setProjeto({ ...projeto, data: "sem data prevista" });
    } else {
      const infosData = new Date();

      const data = e.target.value.split("-");

      let ano = data[0] < 2050 && data[0] >= infosData.getFullYear();
      let mes = data[1] >= infosData.getMonth() + 1;
      let dia = data[2] >= infosData.getDate();

      console.log(data);

      console.log(ano, mes, dia);

      if (data[0] > infosData.getFullYear()) {
        setProjeto({ ...projeto, data: data });
      } else if (data[1] > infosData.getMonth() + 1 && ano && dia) {
        setProjeto({ ...projeto, data: data });
      } else if (data[2] > infosData.getDate() && ano && mes) {
        setProjeto({ ...projeto, data: data });
      } else {
        setProjeto({ ...projeto, data: "sem data prevista" });
      }

      // if (ano || mes || dia) {
      //   console.log("data incorerets");

      //   // setProjeto({ ...projeto, data: "sem data prevista" });
      // } else {
      //   setProjeto({ ...projeto, data: data });
      //   console.log(data);
      // }
    }
  };

  return (
    <div>
      <form>
        <Input
          type="text"
          text="selecione o nome do projeto:"
          name="nome"
          placeholder="Nome do projeto"
          tratarOnChange={tratarInputs}
          value={projeto.nome === "Sem Nome" ? "" : projeto.nome}
        />
        <Input
          type="number"
          text="Selecione o orçamento:"
          name="valor"
          placeholder="Orçamento do projeto"
          tratarOnChange={tratarInputs}
          value={projeto.valor}
        />

        <Input
          type="date"
          text="Data prevista para entrega"
          tratarOnChange={data}
          // value={projeto.data === "sem data prevista" ? null : projeto.data}
        />

        <Select
          categorias={categorias}
          tratarOnChange={tratarSelect}
          // value={projeto.categoria ? projeto.categoria.id : ""}
        />

        <Button type="submit" value={nome} click={submit} />
      </form>
    </div>
  );
}

export default ProjectForm;
