import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
        <h1> ¡Bienvenidos viajeros! </h1>
        </div>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default Landing;
