import axios from "axios";
import {
  ADD_ACTIVITY,
  CLEAR_ALL,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_COUNTRY_BY_ID,
  ORDER_ALPHABETIC,
  ORDER_POPULATION
} from "./action_types";

export const getCountries = () => {
  const endpoint = "http://localhost:3001/countries";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const countries = response.data;

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
      if (country === name) throw Error("Ya elegiste este destino");
      return dispatch({
        type: GET_COUNTRY,
        payload: country,
      });
    } catch (error) {
      console.error("Error al obtener pais", error.message);
    }
  };
};
export const getCountryById = (id) => {
  const endpoint = `http://localhost:3001/countries/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const country = response.data;
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: country,
      });
    } catch (error) {
      console.error("Error al obtener pais", error.message);
    }
  };
};

export const filterByActivity = (activity) => {
  return { type: FILTER_BY_ACTIVITY, payload: activity };
};
export const filterByContinent = (payload) => {
  return { type: FILTER_BY_CONTINENT, payload: payload };
};

export const orderCountriesByName = (payload) => {
  return { type: ORDER_ALPHABETIC, payload: payload };
};

export const orderCountriesByPopulation = (payload) => {
  return { type: ORDER_POPULATION, payload: payload };
};

export const clearAll = (payload) => {
  return {
    type: CLEAR_ALL,
    payload: payload,
  };
};

export const getActivities = () => {
  const endpoint = "http://localhost:3001/activities";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const activities = response.data;

      return dispatch({
        type: GET_ACTIVITIES,
        payload: activities,
      });
    } catch (error) {
      console.error("Error al obtener actividades", error.message);
    }
  };
};

export const addActivity = (payload) => {
  const endpoint = "http://localhost:3001/activities";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, payload);
      const activity = response.data;

      return dispatch({
        type: ADD_ACTIVITY,
        payload: activity,
      });
    } catch (error) {
      console.error("Error al crear la actividad", error.message);
    }
  };
};
