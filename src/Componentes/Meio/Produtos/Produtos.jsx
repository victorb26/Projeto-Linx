import Botao from "../../Botões/Botoes";
import styles from "./Produtos.module.css";
import Listagem from "./Listagem";
import { useState, useEffect } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [contador, setContador] = useState(1);

  useEffect(() => {
    fetch(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${contador}`
    )
      .then((res) => res.json())
      .then((res) => setProdutos([...produtos, ...res.products]));
  }, [contador]);
  return (
    <div className={styles.containerSecaoProdutos}>
      <section id="produtos" className={styles.secaoProdutos}>
        <ul className={styles.containerProdutos}>
          <Listagem produtos={produtos} />
        </ul>
        <div className={styles.btnMaisProdutos}>
          <Botao
            texto="Ainda mais produtos aqui!"
            onClick={() => setContador(contador + 1)}
          />
        </div>
      </section>
    </div>
  );
}
