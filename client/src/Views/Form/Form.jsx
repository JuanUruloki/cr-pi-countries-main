import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, addActivity } from "../../Redux/actions";
import styles from "./Form.module.css";
import Modal from "../../components/Modal/Modal";
import validate from "../../Utils/Validate";



const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [showModal, setShowModal] = useState(false);

  const [modal, setModal] = useState({
    title: "",
    content: "",
  })
  
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [countriesToSelect, setCountriesToSelect] = useState([]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: 0,
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

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
  

  const handleChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    if (property === "duration") value = +value;
    setInput({
      ...input,
      [property]: value,
    });
    setErrors(
      validate({
        ...input,
        [property]: value,
      })
    );
  };

  const handleSelect = (event) => {
    const selectedCountry = event.target.value;

    setCountriesToSelect([...countriesToSelect, selectedCountry]);
    setInput({
      ...input,
      countries: [...input.countries, selectedCountry],
    });
    setErrors(
      validate({
        ...input,
        countries: [...input.countries, selectedCountry],
      })
    );
  };

  const handleUnselect = (event) => {
    const unselectName = event.target.innerText;

    setCountriesToSelect(
      countriesToSelect.filter((country) => country !== unselectName)
    );
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== unselectName),
    });
    setErrors(
      validate({
        ...input,
        countries: input.countries.filter(
          (country) => country !== unselectName
        ),
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(addActivity(input));
    displayModal("Actividad Creada", "Tu actividad fue creada con exito", 3000)
    setInput({
      name: "",
      difficulty: "",
      duration: 0,
      season: "",
      countries: [],
    });

    
  };

  return (
    <div className={styles.container}>
      {showModal && <Modal title={modal.title} content={modal.content} />}
      <div className={styles.formContainer}>
        <h1>Crea tu actividad</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de la actividad</label>
            <input
              type="text"
              placeholder="Ingrese un nombre..."
              name="name"
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="countries">Paises disponibles:</label>
            <div>
              {countriesToSelect.length >= 5 ? (
                ""
              ) : (
                <select
                  value={input.countries}
                  // name="countries"
                  onChange={handleSelect}
                  multiple
                >
                  <option value="" disabled>
                    Selecciona el país de tu actividad:
                  </option>
                  {countries?.map((country) => (
                    <option
                      key={country.id}
                      value={country.id}
                      name="countries"
                    >
                      <div>{country.name}</div>
                    </option>
                  ))}
                </select>
              )}
            </div>
            {errors.countries && <p>{errors.countries}</p>}
            <div className={styles.selected}>
              {countriesToSelect
                ? countriesToSelect.map((country) => (
                    // <div key={country.name}>
                    <p className={styles.country} key={country.id} onClick={handleUnselect}>
                      {country}
                    </p>
                    // </div>
                  ))
                : ""}
            </div>
          </div>
          <div>
            <label>Temporada de la actividad: </label>
            <select name="season" id="season" onChange={handleChange}>
              <option value="">Seleccione una temporada: </option>
              <option value="Summer">Verano</option>
              <option value="Fall">Otoño</option>
              <option value="Winter">Invierno</option>
              <option value="Spring">Primavera</option>
            </select>
            {errors.season && <p>{errors.season}</p>}
          </div>
          <div>
            <label>Nivel de dificultad: </label>
            <input
              type="number"
              value={input.difficulty}
              name="difficulty"
              onChange={handleChange}
            />
            {errors.difficulty && <p>{errors.difficulty}</p>}
          </div>
          <div>
            <label>Duración en horas: </label>
            <input
              type="number"
              value={input.duration}
              name="duration"
              onChange={handleChange}
            />
            {errors.duration && <p>{errors.duration}</p>}
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" disabled={Object.keys(errors).length > 0}>
              Crear actividad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
