import {
  ADD_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_COUNTRY_BY_ID,
  ORDER_ALPHABETIC,
  ORDER_POPULATION,
} from "./action_types";

const initialState = {
  countries: [],
  filteredCountries: [],
  foundCountries: [],
  foundCountry: [],
  allActivities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  let allCountriesFiltered = [];
  let filteredCountriesAlph = [];
  let filteredCountriesPop = [];
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload, filteredCountries: payload };

    case GET_COUNTRY:
      return { ...state, foundCountries: payload };

    case GET_COUNTRY_BY_ID:
      return { ...state, foundCountry: payload };

    case FILTER_BY_CONTINENT:
      allCountriesFiltered = state.filteredCountries.filter(
        (country) => country.continent === payload
      );
      return payload === "All"
        ? { ...state, countries: [...state.filteredCountries] }
        : {
            ...state,
            countries: allCountriesFiltered,
          };

    case ORDER_ALPHABETIC:
      filteredCountriesAlph = payload === "A" ?
      state.countries.sort(function (a, b) {
          if(a.name > b.name) {
              return 1
          }
          if(b.name > a.name) {
              return -1
          }
          return 0
      }) :
      state.countries.sort(function (a, b) {
          if(a.name > b.name) {
              return -1
          }
          if(b.name > a.name) {
              return 1
          }
          return 0
      })    
      return {
          ...state,
          countries: filteredCountriesAlph
      }

      case ORDER_POPULATION:
        filteredCountriesPop = payload === "may" ?
        state.countries.sort(function (a, b) {
            if(a.population > b.population) {
                return 1
            }
            if(b.population > a.population) {
                return -1
            }
            return 0
        }) :
        state.countries.sort(function (a, b) {
            if(a.population > b.population) {
                return -1
            }
            if(b.population > a.population) {
                return 1
            }
            return 0
        })    
        return {
            ...state,
            countries: filteredCountriesPop
    }
      case GET_ACTIVITIES:
        return {
          ...state,
          allActivities: payload,
        }
      case ADD_ACTIVITY:
        return {
          ...state,
          
        }
    default:
      return { ...state };
  }
};

export default rootReducer;
