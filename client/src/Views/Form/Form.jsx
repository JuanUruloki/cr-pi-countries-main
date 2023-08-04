import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, addActivity } from "../../Redux/actions";

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

  if (!input.countries || input.countries.length === 0)
    errors.countries = "Debe asignar uno a mas paises";

  return errors;
};

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    const selectedCountryId = event.target.value;
    if (input.countries.includes(selectedCountryId)) {
      setInput((state) => ({
        ...state,
        countries: state.countries.filter((id) => id !== selectedCountryId),
      }));
    } else {
      setInput((state) => ({
        ...state,
        countries: [...state.countries, selectedCountryId],
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !input.name ||
      !input.difficulty ||
      !input.duration ||
      !input.season ||
      !input.countries
    ) {
      return window.alert(
        "Ingrese datos faltantes antes de enviar el formulario"
      );
    }

    dispatch(addActivity(input));
    window.alert("Actividad añadida con exito");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  // const handleDelete = (event)=>{
  //     setInput({
  //         ...input,
  //         countries: input.countries.filter(country => country !== event)
  //     })
  // }

  return (
    <div>
      <div>
        <h2>Crea tu actividad!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Nombre de actividad..."
              name="name"
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Seleccione el país de su actividad: </label>
            <select
              name="countries"
              id="countries"
              multiple
              onChange={handleSelect}
            >
              <option> </option>
              {countries.map((country) => (
                <option 
                key={country.id} 
                value={country.id}
                selected={input.countries.includes(country)}
                >
                  {country.name}
                </option>
              ))}
            </select>
            {errors.countries && <p>{errors.countries}</p>}
          </div>
          <div>
            <label>Temporada: </label>
            <select name="season" id="season" onChange={handleSelect}>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
            {errors.season && <p>{errors.season}</p>}
          </div>
          <div>
            <label>Dificultad: </label>
            <input
              type="number"
              value={input.difficulty}
              name="difficulty"
              onChange={handleChange}
              placeholder="Rango de 1 a 5..."
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
              placeholder="Rango de 1 a 24"
            />
            {errors.duration && <p>{errors.duration}</p>}
          </div>
          <div>
            <button
              type="submit"
              disabled={Object.keys(errors).length === 0 ? false : true}
            >
              Crear actividad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
