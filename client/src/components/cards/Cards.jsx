// import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  filterByActivity,
  filterByContinent,
  getCountries,
  orderCountriesByName,
  orderCountriesByPopulation,
} from "../../Redux/actions";
import next from "../../assets/images/next.png";
import prev from "../../assets/images/prev.png";
import Card from "../card/Card";
import styles from "./Cards.module.css";

const Cards = () => {
  const countriesPerPage = 10;
  const dispatch = useDispatch();

  const filteredCountries = useSelector((state) => state.filteredCountries);
  const countriesFounded = useSelector((state) => state.foundCountries);
  const activities = useSelector((state) => state.allActivities);
  const [aux, setAux] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * countriesPerPage;
  const lastIndex = startIndex + countriesPerPage;
  const countriesToRender = countriesFounded.length ?
  countriesFounded.slice(startIndex, lastIndex) : filteredCountries.slice(startIndex, lastIndex);
  const isPrev = currentPage > 0;
  const prevDisable = isPrev ? "" : styles.disabled;
  const isNext =
    currentPage < Math.floor(filteredCountries.length / countriesPerPage);
  const nextDisable = isNext ? "" : styles.disabled;

  
  



  const nextPage = () => {
    isNext && setCurrentPage(currentPage + 1);
   
  };

  const prevPage = () => {
    isPrev && setCurrentPage(currentPage - 1);
  };

  const handleFilterByContinent = (event) => {
    const filter = event.target.value;
    dispatch(filterByContinent(filter));
    setCurrentPage(0);
    setAux(!aux);
    
  };

  const handleAlphabeticOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCountriesByName(order));
    setCurrentPage(0);
    setAux(!aux);
  };
  const handlePopulationOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCountriesByPopulation(order));
    setCurrentPage(0);
    setAux(!aux);
  };

  const handleFilterByActivity = (event) => {
    const activity = event.target.value;
    activity === "none"
      ? dispatch(getCountries())
      : dispatch(filterByActivity(activity));
    setAux(!aux);
    setCurrentPage(0);
    
  };

  const clearFilters = ()=>{
    dispatch(clearAll());
  }


  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div>
          <h4> Orden Alfabetico: </h4>
          <select onChange={handleAlphabeticOrder}>
            <option value="">
              Elije una opcion:
            </option>
            <option value="A">A-Z</option>
            <option value="D">Z-A</option>
          </select>
        </div>
        <div>
          <h4> Orden por Población: </h4>
          <select onChange={handlePopulationOrder}>
            <option value="">
              Elije una opcion:
            </option>
            <option value="men">Mayor a menor</option>
            <option value="may">Menor a mayo</option>
          </select>
        </div>
        <div>
          <h4> Filtrar por continente: </h4>
          <select onChange={handleFilterByContinent}>
            <option value="All">Todos</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
        </div>
        <div>
          <h4> Filtrar por actividad: </h4>
          {activities.length === 0 ? (
            <p>Aun no hay actividades</p>
          ) : (
            <select onChange={handleFilterByActivity}>
              <option value="none">Todos</option>
              {Array.isArray(activities) && activities.map((activity) => (
                <option value={activity.name} key={activity.id}>
                  {activity.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <button onClick={clearFilters}>
          Limpiar filtros
        </button>
      </div>
      <button onClick={prevPage} className={`${styles.button} ${prevDisable}`}>
        <img src={prev} alt="prev icon" />
      </button>
      <div className={styles.cardsContainer}>
        {countriesToRender.map((country) => {
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
      </div>
      <button onClick={nextPage} className={`${styles.button} ${nextDisable}`}>
        <img src={next} alt="next icon" />
      </button>
    </div>
  );
};

export default Cards;
