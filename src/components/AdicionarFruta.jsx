import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../actions/frutas.action";

const AdicionarFruta = () => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const dispatch = useDispatch()


  const adicionarFruta = (event) => {
    event.preventDefault();
    const fruta = {
        id: new Date(),
        nome,
        quantidade
    }
    dispatch(actions.adicionar(fruta))
  };
  return (
    <form onSubmit={adicionarFruta}>
      <input
        type="text"
        name={nome}
        placeholder="Fruta"
        required
        onChange={(event) => setNome(event.target.value)}
      ></input>
      <input
        type="text"
        name={quantidade}
        placeholder="Quantidade"
        required
        onChange={(event) => setQuantidade(event.target.value)}
      ></input>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionarFruta;
