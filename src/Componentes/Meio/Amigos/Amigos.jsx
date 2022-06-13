import Botoes from "../../Botões/Botoes";
import styles from "./Amigos.module.css";

const Amigos = () => {
  return (
    <section className={styles.secaoContainer}>
      <div className={styles.secao} id="compartilhe">
        <div>
          <p>
            Quer que seus amigos também ganhem a lista personalizada deles?
            Preencha agora!
          </p>
        </div>
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
        <Botoes texto="Enviar agora" />
      </div>
    </section>
  );
};

export default Amigos;
