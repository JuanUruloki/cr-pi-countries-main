import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../Redux/actions";
import Modal from "../../components/Modal/Modal";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
 
  const [inputValue, setInputValue] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    content: "",
  })
  
  const displayModal = (title, content, time) => {
    setModal({
      title: title,
      content: content,
  })
  setShowModal(true)
  setTimeout(() => {
      setShowModal(false)
      setModal({ title: '', message: '' })
  }, time)
}

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inputValue.length
      ? dispatch(getCountry(inputValue))
      : displayModal("Faltan datos", "Debe ingresar un país", 3000);
    setInputValue("");
    
  };

  const handleKeyDown = (event) => {
    
    if (event.key === "Enter") {
      inputValue.length
        ? dispatch(getCountry(inputValue))
        : displayModal("Faltan datos", "Debe ingresar un país", 3000);
      setInputValue("");
     
    }
  };

  const clear = ()=> {
    dispatch(getCountry())
  }

  return (
    <div className={styles.container}>
      {showModal && <Modal title={modal.title} content={modal.content} />}
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
      <button onClick={clear}>Limpiar</button>
    </div>
  );
};

export default SearchBar;
