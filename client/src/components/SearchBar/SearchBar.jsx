import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../Redux/actions";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inputValue.length
      ? dispatch(getCountry(inputValue))
      : window.alert("No ingresó destino");
    setInputValue("");
    
  };

  const handleKeyDown = (event) => {
    
    if (event.key === "Enter") {
      inputValue.length
        ? dispatch(getCountry(inputValue))
        : window.alert("No ingresó destino");
      setInputValue("");
     
    }
  };

  return (
    <div className={styles.container}>
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
  );
};

export default SearchBar;
