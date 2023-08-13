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

  export default validate;