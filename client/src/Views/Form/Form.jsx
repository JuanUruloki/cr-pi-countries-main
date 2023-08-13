import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, addActivity } from "../../Redux/actions";
import styles from "./Form.module.css";

const validate = (input) => {
  let errors = {};
  let difficulty = Number(input.difficulty);
  let duration = Number(input.duration);

  if (!input.name) errors.name = "Debe ingresar un nombre";
  else if (/[^A-Za-z0-9 ]+/g.test(input.name))
    errors.name = "Nombre no puede tener caracteres especiales o tildes";

  if (!input.difficulty) errors.difficulty = "Debe especificar la dificultad";
  else if (difficulty <= 0 || difficulty > 5)
    errors.difficulty = "Debe ser mayor a 1 y menor a 5";

  if (!input.duration) errors.duration = "Debe espcificar la duración";
  else if (duration <= 0 || duration > 24)
    errors.duration = "Debe ser mas de 1 hora y menos de 24 horas";

  if (!input.season || input.season === "vacio")
    errors.season = "Debe indicar una estación";

  if (input.countries === "")
    errors.countries = "Debe asignar uno a mas paises";
  if (input.countries.length > 5)
    errors.countries = "La actividad sólo puede tener máximo 2 paises";

  return errors;
};

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  // console.log(countries);
  const [errors, setErrors] = useState({});

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
    window.alert("Actividad añadida con exito");
    setInput({
      name: "",
      difficulty: "",
      duration: 0,
      season: "",
      countries: [],
    });
    console.log(input);
  };

  return (
    <div className={styles.container}>
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
                      {country.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {errors.countries && <p>{errors.countries}</p>}
            <div key="country" className={styles.selected}>
              {countriesToSelect
                ? countriesToSelect.map((country) => (
                    // <div key={country.name}>
                    <p key={country.id} onClick={handleUnselect}>
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
              // placeholder="Baja:1  Muy alta: 5..."
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
              // placeholder="1 a 24 hs"
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
