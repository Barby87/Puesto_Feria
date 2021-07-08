import productData from "../../productos.json";
import styles from "./Productos.module.css";

type Producto = {
  title: string;
};

const Productos = () => {
  const productos: Producto[] = productData;
  return (
    <div className={styles.container_card}>
      <div className="card">
        <ul className="list-group list-group-flush">
          {productos.map((producto: Producto, index: number) => (
            <li key={index} className="list-group-item">
              {index + 1}. {producto.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Productos;
