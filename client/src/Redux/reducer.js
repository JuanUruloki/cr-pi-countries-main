import { FILTER, GET_COUNTRIES, GET_COUNTRY, ORDER } from "./action_types";


const initialState = {
    countries: [],
    filteredCountries: [],
    foundCountries: [] 
};

const rootReducer = (state= initialState, {type, payload})=>{
    let allCountriesFiltered = [];
    let filteredCountriesCopy=[];
    switch (type) {
        case GET_COUNTRIES:
            return {...state, countries: payload, filteredCountries: payload};
        
      
            
        case GET_COUNTRY:
                return {...state, foundCountries: payload};
            
        case FILTER:
            
            allCountriesFiltered = state.filteredCountries.filter(
                (country) => country.continent === payload
              );
              return payload === "All"
                ? { ...state, countries: [...state.filteredCountries] }
                : {
                    ...state,
                    countries: allCountriesFiltered,
                  };

        case ORDER:
            filteredCountriesCopy = [...state.filteredCountries];
      return {
        ...state,
        countries:
          payload === "A"
            ? filteredCountriesCopy.sort((a, b) => a.id - b.id)
            : filteredCountriesCopy.sort((a, b) => b.id - a.id),
      };
    
        default:
            return {...state};
    }
};

export default rootReducer