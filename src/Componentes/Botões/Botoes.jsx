import styles from "../Botões/Botoes.module.css";

const Botoes = ({ texto, onClick }) => {
  return (
    <button className={`${styles.botoes} ${styles.largura}`} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botoes;
