import axios from "axios";
import { FILTER, GET_COUNTRIES, GET_COUNTRY, ORDER } from "./action_types";

export const getCountries = () => {
  const endpoint = "http://localhost:3001/countries";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const countries= response.data;
      // console.log(countries);
      return dispatch({
        type: GET_COUNTRIES,
        payload: countries,
      });
    } catch (error) {
      console.error("Error al obtener paises", error.message);
    }
  };
};



export const getCountry = (name) => {
  const endpoint = `http://localhost:3001/countries?name=${name}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const country = response.data;
      if(country === name) throw Error ("Ya elegiste este destino");
      return dispatch({
        type: GET_COUNTRY,
        payload: country,
      });
    } catch (error) {
      console.error("Error al obtener pais", error.message);
    }
  };
};

export const filterCountries = (continent, activity) => {
  if (continent) return { type: FILTER, payload: continent };
  if (activity) return { type: FILTER, payload: activity };
};

export const orderCountries = (order) => {
  return { type: ORDER, payload: order };
};
