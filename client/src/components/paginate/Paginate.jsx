import styles from "./Paginate.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "../card/Card";
import { prev, next } from "../../assets";

const Paginate = () => {
  let page = 0;
  const countries = useSelector((state) => state.pokemons);
  const [countriesPerPage, setCountriesPerPage] = useState(
    countries.splice(page, 10)
  );
  const nextPage = () => {
    page += 10;
    console.log(page);
    setCountriesPerPage(countries.splice(page, 10));
  };
  const prevPage = () => {
    page -= 10;
    console.log(page);
    setCountriesPerPage(countries.splice(page, 10));
  };

  return (
    <div className={styles.container}>
      <button onClick={prevPage} className={`${styles.button} ${styles.prev}`}>
        <img src={prev} alt="type icon" />
      </button>
      {countriesPerPage.map((country) => {
        return (
          <Card
            id={country.id}
            key={country.id}
            image={country.flag}
            name={country.name}
            continent={country.continent}
          />
        );
      })}
      <button onClick={nextPage} className={`${styles.next} ${styles.button}`}>
        <img src={next} alt="type icon" />
      </button>
    </div>
  );
};

export default Paginate;
