// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { useState } from "react";
import { filterByActivity, filterByContinent, getCountries, orderCountriesByName, orderCountriesByPopulation} from "../../Redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const foundCountries = useSelector((state) => state.foundCountries);
  const activities = useSelector((state)=> state.allActivities)
  const [aux, setAux] = useState(false);

  const handleFilterByContinent = (event) => {
    const filter = event.target.value
    dispatch(filterByContinent(filter))
  }

  const handleAlphabeticOrder = (event) => {
       const order = event.target.value;
    setAux(!aux);
    dispatch(orderCountriesByName(order));
  };
  const handlePopulationOrder = (event) => {
       const order = event.target.value;
    setAux(!aux);
    dispatch(orderCountriesByPopulation(order));
  };

  const handleFilterByActivity = (event) => {
    const activity = event.target.value;
    activity === "none" ? dispatch(getCountries()) :
    dispatch(filterByActivity(activity));
  };

  const countriesToRender = foundCountries.length ? foundCountries : countries;

  return (
    <div>
      <div>
        <div>
          Orden Alfabetico:
        <select onChange={handleAlphabeticOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        </div>
        <div>
          Orden por Población:
        <select onChange={handlePopulationOrder}>
          <option value="may">Ascendente</option>
          <option value="men">Descendente</option>
        </select>
        </div>
        <div>
          Filtrar por continente:
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
          Filtrar por actividad:
          {(activities.length===0) ? <p>Aun no hay actividades</p>:
          <select onChange={handleFilterByActivity}>
            <option value="none"></option>
            {activities.map(activity=>(
              <option value={activity.name} key={activity.id}>{activity.name}</option>
            ))}
          </select>
          }
        </div>
      </div>
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
  );
};

export default Cards;
