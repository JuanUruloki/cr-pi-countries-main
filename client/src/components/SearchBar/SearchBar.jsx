import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../Redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log( inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountry(inputValue));
    setInputValue("");
  };

  const handleKeyDown = (event)=>{
    
    if(event.key === "Enter") {
      dispatch(getCountry(inputValue));
      setInputValue("");
    }
  }

  return (
    <div>
    <div>
      <input
        type="text"
        placeholder="Elije tu destino!"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </div>
    {/*Antarctica South America Asia Africa Europe North America Oceania   */}
    <div>
      <select  >
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select >
        <option value="All">Todos</option>
        <option value="All">Antartica</option>
        <option value="All">Africa</option>
        <option value="All">Asia</option>
        <option value="All">Europe</option>
        <option value="All">North America</option>
        <option value="All">Oceania</option>
        <option value="All">South America</option>
      </select>
    </div>
    </div>
  );
};

export default SearchBar;
