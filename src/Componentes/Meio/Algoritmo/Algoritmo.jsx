import React from 'react';
import styles from "./Algoritmo.module.css";

const Algoritmo = () => {
    return (
        <>
          <label>
            Seu nome: <br />
            <input className={styles.inputTexto} name="name" type="text" />
          </label>
    
          <label>
            E-mail <br />
            <input className={styles.inputTexto} name="email" type="email" />
          </label>
    
          <label>
            CPF: <br />
            <input
              className={styles.inputTexto}
              minLength={11}
              name="cpf"
              type="text"
              onChange={valueInput}
              value={user.cpf}
            />
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
            <Botao texto="Enviar" type="submit" />
          </div>
        </>
      );
}

export default Algoritmo
