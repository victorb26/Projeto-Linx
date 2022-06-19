import React from "react";
import "./App.css";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Algoritmo from "./Componentes/Meio/Algoritmo/Algoritmo";
import Amigos from "./Componentes/Meio/Amigos/Amigos";
import Produtos from "./Componentes/Meio/Produtos/Produtos";
import Rodape from "./Componentes/Rodape/Rodape";

function App() {
  
  return (
    <div className="App">
      <Cabecalho  />
      <Algoritmo/>
        <Produtos />
        <Amigos />
      <Rodape/>
      </div>
    
  );
}

export default App;
