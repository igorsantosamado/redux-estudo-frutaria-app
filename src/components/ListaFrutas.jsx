import React from "react";

import Fruta from "./Fruta"
import AdicionarFruta from "./AdicionarFruta";

const ListaFrutas = () => {
  const frutas = [
    { id: 1, nome: "Abacaxi" },
    { id: 2, nome: "Maçã" } ];

  return (
    <>
      <h1>Lista de Frutas</h1>

      <AdicionarFruta />

      {frutas.map(fruta => (
        <Fruta key={fruta.id} fruta={fruta} />
      ))}
    </>
  );
};

export default ListaFrutas;
