import Botoes from "../Botões/Botoes";
import styles from './Cabecalho.module.css';

const Cabecalho = () => {
  return (
      <header className={styles.cabecalho}>
        <div className={styles.fundo}>
    
    <section >
      <p>uma seleção de produtos</p>
      <h1>especial para você</h1>
      <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
    </section>
    
    <nav className={styles.navegar}>
        <ul>
          <li>
            <Botoes  texto="Conheça a Linx" />
          </li>
          <li>
            <Botoes texto="Ajude o algorítimo" />
          </li>
          <li>
            <Botoes texto="Seus produtos" />
          </li>
          <li>
            <Botoes texto="Compartilhe" />
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Cabecalho
