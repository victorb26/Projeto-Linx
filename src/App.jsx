import React from "react"
import './App.css'
import Cabecalho from "./Componentes/Cabecalho/Cabecalho"
import Produtos from "./Componentes/Produtos/Produtos"
import Rodape from "./Componentes/Rodape/Rodape"

function App() {
  return(
        <div className="">
          <Cabecalho />
          <Produtos/>
          <Rodape />
      </div>  
  )
}

export default App
