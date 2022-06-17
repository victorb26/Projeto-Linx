import React from "react"
import './App.css'
import Cabecalho from "./Componentes/Cabecalho/Cabecalho"
import Amigos from "./Componentes/Meio/Amigos/Amigos"
import Produtos from "./Componentes/Meio/Produtos/Produtos"
import Rodape from "./Componentes/Rodape/Rodape"

function App() {
  return(
        <div className="">
          <Cabecalho />
          <Produtos/>
          <Amigos/>
          <Rodape />
      </div>  
  )
}

export default App
