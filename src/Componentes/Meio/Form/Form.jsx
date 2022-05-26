import styles from "./Form.module.css"
import Botoes from "../../Botões/Botoes"

const Form = () => {
  return (
    <form className={styles.cadastro}>
      <label>
        Seu nome <br/>
          <input className={styles.textoEntrada} name="name" type="text"/>
      </label>
      <label>

        Email: <br/>
          <input className={styles.textoEntrada} name="email" type="email"/>
      </label>

      <label>
        CPF <br/>
          <input className={styles.textoEntrada} name="cpf" type="number"/>
      </label>


      <div className={styles.containerLabel}>
        <label className={styles.labelRadio}>
          <input className={styles.radio} name="sexo" type="radio" checked />
          Masculino
        </label>

        <label className={styles.labelRadio}>
          <input className={styles.radio} name="sexo" type="radio" />
          Feminino
        </label>
      </div>
      <div className={styles.btnEnviar}>
        <Botoes texto="Enviar" type="submit" />
      </div>
    </form>
  )
}

export default Form
