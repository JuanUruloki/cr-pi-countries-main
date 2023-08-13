import {
  ADD_ACTIVITY,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_COUNTRY_BY_ID,
  ORDER_ALPHABETIC,
  ORDER_POPULATION,
  CLEAR_ALL,
  
} from "./action_types";

const initialState = {
  countries: [],
  filteredCountries: [], //paginado sobre este state
  foundCountries: [],
  foundCountry: [],
  allActivities: [],
  filteredActivities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  let allCountriesFiltered = [];
  let filteredCountriesAct = [];
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
      allCountriesFiltered = state.countries.filter(
        (country) => country.continent === payload
      );
    
      return payload === "All"
        ? { ...state, filteredCountries: [...state.countries] }
        : {
            ...state,
            filteredCountries: allCountriesFiltered,
          };

    case ORDER_ALPHABETIC:
      filteredCountriesAlph =
        payload === "A"
          ? state.filteredCountries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.filteredCountries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filteredCountries: filteredCountriesAlph,
      };

    case ORDER_POPULATION:
      filteredCountriesPop =
        payload === "may"
          ? state.filteredCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.filteredCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filteredCountries: filteredCountriesPop,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: payload,
        filteredActivities: payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        allActivities: payload,
      };

    case FILTER_BY_ACTIVITY:
      filteredCountriesAct = state.countries.filter(country =>
        country.Activities.some(activity => activity.name === payload)
      );
      
      
      
      return payload === "All"
        ? { ...state, filteredCountries: [...state.filteredCountries] }
        : {
            ...state,
            filteredCountries: filteredCountriesAct,
          };

      case CLEAR_ALL:
        return {...state, 
        filteredCountries: [...state.countries]}

      
        

    default:
      return { ...state };
  }
};

export default rootReducer;
