import Productos from "../../components/productos/Productos";
import PrimerTitulo from "../../components/titulo/PrimerTitulo";

const Home = () => {
  return (
    <>
      <PrimerTitulo name="Lista de feria" />
      <Productos />
    </>
  );
};

export default Home;
