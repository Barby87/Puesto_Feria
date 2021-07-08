import styles from "./PrimerTitulo.module.css";

interface PrimerTituloProps {
  name: string;
}

const PrimerTitulo = ({ name }: PrimerTituloProps) => {
  return <h1 className={styles.titulo}>{name}</h1>;
};

export default PrimerTitulo;
