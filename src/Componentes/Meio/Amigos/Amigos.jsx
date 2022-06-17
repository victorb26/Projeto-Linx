import Botao from"../../Botões/Botoes";
import styles from "./Amigos.module.css";
import Divisoria from "../Divisoria/Divisoria";

const Amigos = () => {
  return (
    <section className={styles.secaoContainer}>
      <Divisoria texto="Compartilhe a novidade" />

      <div className={styles.secao} id="compartilhe">
        <aside>
          <p>
            Quer que seus amigos também ganhem a lista personalizada deles?
            Preencha agora!
          </p>
        </aside>
        <div className={styles.labelInput}>
          <label>
            Nome do seu amigo: <br /> <input type="text" />
          </label>
          <label>
            E-mail: <br /> <input type="email" />
          </label>
        </div>
      </div>
      <div className={styles.btnEnviar}>
        <Botao texto="Enviar agora" />
      </div>
    </section>
  );
};

export default Amigos;
