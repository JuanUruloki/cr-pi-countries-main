import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, name, image, continent }) => {
  const countryName = (name) => {
    let nombre = name;
    if (name.length > 29) return nombre.slice(0, 29) + "...";
    return nombre;
  };
  return (
    <Link className={styles.link} to={`/detail/${id}`}>
      <div className={styles.container}>
        <img className={styles.flag} src={image} alt="bandera" />
        <h2>{countryName(name)}</h2>
        <h4>{continent}</h4>
      </div>
    </Link>
  );
};

export default Card;
